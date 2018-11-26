FROM starefossen/ruby-node:2-8-alpine

# Minimum requirements to run jekyll / webpack
RUN apk add --no-cache --update bash \
                                build-base \
                                yarn

WORKDIR /usr/local/app
ENV PATH ${WORKDIR}/node_modules/.bin:$PATH

ADD Gemfile* ./
RUN bundle install

ADD package.json yarn.lock ./
RUN yarn install --pure-lockfile

COPY . ./
