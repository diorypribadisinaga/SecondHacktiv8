// Require the Cloudinary library
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "df6oumnnn", // TODO: Ganti dengan cloudname-mu
  api_key: "263346427615133", // TODO: Ganti dengan API Key-mu
  api_secret: "EhxbWcNIZmgEqnr0Ef_hE3rzcvw", // TODO: Ganti dengan API Secret-mu
  secure: true,
});

module.exports = cloudinary;
