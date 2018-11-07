// Modules
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = (env = {}) => {
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
    app: path.join(__dirname, 'src', 'index.js'),
    amp: path.join(__dirname, 'src', 'amp.js'),
  };

  /**
   * Output
   * Reference: https://webpack.js.org/configuration/output/
   */
  config.output = {
    path: path.join(__dirname, 'assets'),
    filename: isProd ? '[name].[chunkhash].js' : '[name].js',
    publicPath: '/assets/',
  };

  /**
   * Resolve
   * Reference: https://webpack.js.org/configuration/resolve/
   * Add paths to modules so we don't need to use relative paths
   */
  config.resolve = {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  };

  /**
   * Devtool
   * Reference: https://webpack.js.org/configuration/devtool/
   */
  config.devtool = isProd ? 'source-map' : 'eval';

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
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            // Reference: https://github.com/webpack/css-loader
            // Allow loading css through js
            { loader: 'css-loader' },
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
                includePaths: [`${__dirname}/src/styles`],
              },
            },
          ],
        }),
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
    // Reference: https://webpack.js.org/plugins/environment-plugin/
    // use 'development' unless process.env.NODE_ENV is defined
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
    // Reference: https://github.com/danethurber/webpack-manifest-plugin
    // Output the manifest for jekyll to import
    new ManifestPlugin({
      fileName: '../_data/webpack.json',
      publicPath: '/assets/',
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
    new ExtractTextPlugin({
      filename: isProd ? '[name].[chunkhash].css' : '[name].css',
      allChunks: true,
    }),
    // Reference: https://webpack.js.org/plugins/commons-chunk-plugin/
    // Compile all third-party(node_modules) dependencies to vendor
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ context }) => context && context.includes('node_modules'),
    }),
    // Split common webpack meta data into a seperate file to prevent vendor
    // changing on every build
    new webpack.optimize.CommonsChunkPlugin({
      name: 'meta',
      chunks: 'vendor',
    }),
    // Reference: https://github.com/webpack-contrib/copy-webpack-plugin
    // Copy AMP styles over to _includes folder
    new CopyWebpackPlugin([
      {
        from: 'assets/amp.*.css',
        to: '_includes/amp.css',
      },
    ], {}),
    // Reference: https://www.npmjs.com/package/replace-in-file-webpack-plugin
    // Remove disallowed / invalid CSS from AMP stylesheet
    new ReplaceInFileWebpackPlugin([{
      dir: '_includes',
      files: ['amp.css'],
      rules: [
        { search: /!important/g, replace: ''},
        { search: /@-ms-viewport/g, replace: ''},
      ],
    }]),
  ];

  if (isProd) {
    config.plugins.push(
      // Reference: https://webpack.js.org/plugins/no-emit-on-errors-plugin/
      // Only emit files when there are no errors
      new webpack.NoEmitOnErrorsPlugin(),
      // Reference: https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
      // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
    );
  }

  /**
   * Dev Server
   * Reference: https://webpack.js.org/configuration/dev-server
   */
  config.devServer = {
    contentBase: path.join(__dirname, '_site'),
    watchContentBase: true,
  };

  return config;
};
