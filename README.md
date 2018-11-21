# Red Ant Website

The Red Ant Website based on [Jekyll + Webpack](https://github.com/red-ant/jekyll-webpack).

The app uses a standard Jekyll structure with all uncompiled asset source files
located in `./src`.

## Quick start :runner:

```
cd ~/src
git clone git@github.com:red-ant/redant-home.git
cd redant-home
```

Make sure your local node & ruby are up to date:

```
rbenv install 2.5.3
rbenv local 2.5.3
nodenv install 8.11.3
nodenv local 8.11.3
```

Then:

```
bundle install
yarn install
yarn start
open http://localhost:4000
```


If nokogiri fails, add config and repeat the previous commands:

```
bundle config build.nokogiri --use-system-libraries --with-xml2-include=$(brew --prefix libxml2)/include/libxml2
```

## Updating portfolio order

In the file `/_data/portfolio.json` you can change the order of the projects shown in the portfolio page by changing the order of the slugs.

```
{
  "order": [
    "page-slug-1",
    "page-slug-2",
    "page-slug-3",
    "page-slug-4"
  ]
}
```

## Updating content

Edit and add page or image content in the folders below

```
├── ...
├── _pages      # Edit and add new pages here
├── _portfolio  # Edit and add portfolio content here
└── src
    ├── ...
    └── images  # Add images here
```

When creating new pages, be sure to set the layout and permalink at the top of the file as shown below. For further examples, have a look at the files in `/_pages`.

```
---
layout: default
permalink: /our-approach/
---
```

**Project image sizes:** Project images for desktop on the project detail header might vary in size. The desktop images are recalculated to 45.92% of the original image height in pixels and the default size is 729px. If an image is to me smaller than this default size, then you will have to add the calculated pixel height (to be supplied by Kap) in the project markdown file under the parameter `desktop_img_height`.

**IMPORTANT:** Images that are added to `/src/images/` and all its subdirectories are flattened into a single folder `/assets`, so each image should have a unique name. So to avoid conflicts, prefix the folder name, for instance `/src/images/folder123/image.jpg` is best called `/src/images/folder123/folder123-image.jpg`.

Inside Jekyll HTML templates, the image can be referenced using just the image name:

```
<img src="{{ site.data.webpack['folder123-image.jpg'] }}" />
```

Or inside Markdown files, images can be referenced like so:

```
![Alt text for Image]({{ site.data.webpack['folder123-image.jpg'] }})
```

Inside SASS files, the image can be referenced with the full path from the src
directory. The `~` is a webpack shortcut which essentially expands to `./src/`:

```
.class-name {
  background-image: url('~images/folder123/folder123-image.jpg');
}
```

## Gems & Node Modules

You can install gems and node_modules to your host machine as normal:
```
gem install <name>
yarn add <name>
```

However they won't be available within the container till you run:
```
docker-compose up
```

So installing Gems or Node Modules generally requires stopping the docker
container, installing the dependency then starting the container again.

## Release / Deploy

```
yarn release
```

Webpack & Jekyll will build the site commit and push to the `gh-pages` branch.

## AMP

AMP requires a customised css file that requires the minimum Bootstrap styles to render posts. This is handled by webpack using the amp.js entrypoint which compiles to /assets/amp.[hash].css.

- `src/styles/amp/` contains all custom AMP styles. This is required because AMP limits the stylesheet size to 50kb and has constraints that our custom styles need to adhere to.
- `script/amp` is called post build which copies `/assets/amp.[hash].css` to `_includes/amp/index.css` for Jekyll to consume. This is handled by webpack using the `src/amp.js` entrypoint which compiles to `/assets/amp.[hash].css`.
- `_layouts/amp.html` is the main template the amp-jekyll plugin uses to generate the AMP pages
- `_includes/amp` contains the customised headers and elements AMP needs in order to be valid
- Reference at [amp-jekyll plugin](https://github.com/juusaw/amp-jekyll) and [here](https://nbsoftsolutions.com/blog/creating-a-parallel-amp-site-with-jekyll).

## Forestry

Forestry front matters and settings are in the `.forestry` folder.
Forestry uses the `yarn preview` & `yarn build` scripts.

All forestry page asset uploads are set to go into the `/assets/uploads` folder.
