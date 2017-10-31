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
brew install dinghy docker docker-machine
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

The dev environment has been setup to use webpack-dev-server so livereloading
should work with no setup.

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
docker-compose run web yarn build
```

Webpack & Jekyll will build the site to the docs directory. Commit the files in
`docs` then push. The docs directory will be served by github pages.
