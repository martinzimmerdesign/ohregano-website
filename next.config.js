module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  },
};

// next.config.js
/*
module.exports = {
  // Target must be serverless
  target: "serverless"
};

*/
/* const webpack = require('webpack');
require('dotenv').config(); */

// webpack.config.js
/*
 const Dotenv = require('dotenv-webpack');

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
 