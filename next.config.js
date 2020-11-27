// next.config.js

module.exports = {
  // Target must be serverless
  target: "serverless",

  experimental: {
    documentMiddleware: true
  }
  
};
