// next.config.js

module.exports = {
  // Target must be serverless
  target: "serverless"
};


/* const webpack = require('webpack');
require('dotenv').config(); */

// webpack.config.js
/* const Dotenv = require('dotenv-webpack');

module.exports = {

  webpack: config => {
    config.plugins.push(new Dotenv());
    return config;
  }
}; */

/*
module.exports = {
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  }
}; */
 