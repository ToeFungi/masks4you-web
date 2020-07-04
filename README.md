# Masks4You
Simple web server and site for the company Masks4You.

## Running Locally
```
$ git clone git@github.com:ToeFungi/masks4you-web.git
$ cd masks4you-web
$ npm i
$ npm start
``` 

The website will be available on `http://localhost:3000`

## Running using Docker

Please ensure that you have [docker](https://www.docker.com/) installed.

```
$ docker build -t masks4you -f Dockerfile .
$ docker run -p 3000:3000 masks4you
```

Alternitively, you can run `sh build-and-run.sh` as a _one click_ option.

## Hosted
This website is hosted using Heroku. It is available at
https://masks4you.herokuapp.com/
