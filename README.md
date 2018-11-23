# Red Ant Website

The Red Ant Website based on [Jekyll + Webpack](https://github.com/red-ant/jekyll-webpack).

The app uses a standard Jekyll structure with all uncompiled asset source files
located in `./src`.

## Quick start with yarn :runner:

Ensure ruby & node are installed with the .ruby-version & .node-version included, and preferably have yarn installed otherwise use npm.

```
cd ~/src
git clone git@github.com:red-ant/redant-home.git
cd redant-home
bundle install && yarn install
yarn start
open http://localhost:4000
```

If nokogiri fails, then try:

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

Use forestry.io -> https://redant.com.au/admin

**Project image sizes:** Project images for desktop on the project detail header might vary in size. The desktop images are recalculated to 45.92% of the original image height in pixels and the default size is 729px. If an image is to me smaller than this default size, then you will have to add the calculated pixel height (to be supplied by Kap) in the project markdown file under the parameter `desktop_img_height`.

Generally all images for posts / pages should be uploaded and handled through the forestry cms. Uploaded images live in `/assets/uploads`.

Assets used within templates should live within `/assets/layout`.

Assets loaded within js or css are handled by webpack and should reside in `_webpack/images`. Within SASS files images can be referenced with a `~` as below:

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

## Docker

See the playbook for setting up a new machine, in particular the dinghy / docker section.

<https://github.com/red-ant/playbooks/blob/master/new_machine/sierra.md>

Or to keep it brief:

Install virtualbox:
```
brew tap phinze/homebrew-cask
brew install brew-cask
brew cask install virtualbox
```

Install docker requirements:
```
brew tap codekitchen/dinghy
brew install dinghy docker docker-machine docker-compose
```

Then create dinghy with virtualbox as the provider:
```
dinghy create --provider virtualbox
```

Start it up:
```
dinghy up
docker-compose up
open http://web.redanthome.docker
```

## Problems with your VMz? 🧟

Try this

```
docker-compose rm
docker-compose rmi
```
then check to see if there are any still running

```
docker-compose ps
docker-compose images
```

Then start up again
```
dinghy up
docker-compose up
open http://web.redanthome.docker
```

If you're still having issues, kill all the images and then
```
dinghy destroy
```
Then restart your machine, suck your finger and write "666" with that finger on your screen during startup, and spin twice in your chair. Slowly. Then when the machine comes back up
```
dinghy create
dinghy up
docker-compose up
open http://web.redanthome.docker
```

Zombies be gone
