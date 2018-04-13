# Red Ant Website

The Red Ant Website based on [Jekyll + Webpack](https://github.com/red-ant/jekyll-webpack).

The app uses a standard Jekyll structure with all uncompiled asset source files
located in `./src`.

## Install docker and prerequisites

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

## Quick start :runner:

```
cd ~/src
git clone git@github.com:red-ant/redant-home.git
cd redant-home
dinghy up
docker-compose up
open http://web.redanthome.docker
```


## Problems with your VMz? 🧟

Try this

```
docker-compose rm
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
Then restart your machine, write "666" with your fingers on your screen during startup, and then when the machine comes back up
```
dinghy create
dinghy up
docker-compose up
open http://web.redanthome.docker
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
