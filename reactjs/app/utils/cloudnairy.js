const cloudnary = require('cloudnary').v2;

// Cloudinary configuration
cloudnary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

module.exports = { cloudnary };
