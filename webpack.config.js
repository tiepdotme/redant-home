// Modules
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  /**
   * Config
   * Reference: https://webpack.js.org/configuration/
   * This is the object where all configuration gets set
   */
  const config = {};

  /**
   * Entry
   * Reference: https://webpack.js.org/configuration/entry-context/
   */
  config.entry = {
    app: `${__dirname}/_webpack/index.js`,
    amp: `${__dirname}/_webpack/amp.js`,
  };

  /**
   * Output
   * Reference: https://webpack.js.org/configuration/output/
   */
  config.output = {
    path: `${__dirname}/assets/webpack`,
    filename: isProd ? '[name].[chunkhash].js' : '[name].js',
    publicPath: '/assets/webpack/',
  };

  /**
   * Resolve
   * Reference: https://webpack.js.org/configuration/resolve/
   * Add paths to modules so we don't need to use relative paths
   */
  config.resolve = {
    modules: [`${__dirname}/_webpack`, 'node_modules'],
  };

  /**
   * Split Chunks
   * Reference: https://webpack.js.org/configuration/devtool/
   */
  config.optimization = {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }

  /**
   * Loaders
   * Reference: https://webpack.js.org/configuration/module/
   * List: https://webpack.js.org/loaders/
   * This handles most of the magic responsible for converting modules
   */
  config.module = {
    rules: [
      // JS LOADER
      // Reference: https://github.com/babel/babel-loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },

      // CSS LOADER
      // Reference: https://webpack.js.org/plugins/extract-text-webpack-plugin/
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          // Reference: https://github.com/postcss/postcss-loader
          // Postprocess your css with PostCSS plugins
          {
            loader: 'postcss-loader',
            options: { plugins: [autoprefixer] },
          },
          // Reference: https://github.com/webpack-contrib/sass-loader
          // Convert scss to css
          {
            loader: 'sass-loader',
            options: {
              includePaths: [`${__dirname}/_webpack/styles`],
            },
          },
        ],
      },

      // FILE LOADER
      // Reference: https://github.com/webpack-contrib/file-loader
      {
        test: /\.(png|jpg|jpeg|gif|mp3|svg|woff|woff2|ttf|eot|ico|swf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: isProd ? '[name].[hash:20].[ext]' : '[name].[ext]',
            },
          },
        ],
      },
    ],
  };

  /**
   * Plugins
   * Reference: https://webpack.js.org/configuration/plugins/
   * List: https://webpack.js.org/plugins/
   */
  config.plugins = [
    // Reference: https://github.com/Klathmon/imagemin-webpack-plugin
    // Optimize all project images
    new ImageminPlugin({
      disable: !isProd, // Disable during development
      pngquant: {
        quality: '95-100'
      }
    }),

    // Reference: https://github.com/danethurber/webpack-manifest-plugin
    // Output the manifest for jekyll to import
    new ManifestPlugin({
      fileName: `${__dirname}/_data/webpack.json`,
      publicPath: '/assets/webpack/',
      writeToFileEmit: true,
    }),

    // Reference: https://webpack.js.org/plugins/provide-plugin/
    // Automatically load modules instead of having to import or require them everywhere.
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),

    // Reference: https://webpack.js.org/plugins/extract-text-webpack-plugin/
    // Extract css files
    new MiniCssExtractPlugin({
      filename: isProd ? '[name].[chunkhash].css' : '[name].css',
      allChunks: true,
    }),

    // Reference: https://github.com/1337programming/webpack-shell-plugin
    // Copy amp.css to _includes via a script
    new WebpackShellPlugin({
      onBuildEnd: ['./script/amp']
    }),
  ];

  return config;
};
