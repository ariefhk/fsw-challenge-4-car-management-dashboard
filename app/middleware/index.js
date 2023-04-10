const checkCar = require("./checkCarMiddleware.js");
const imgUploader = require("./imgUploaderMiddleware.js");
const cloudinaryUpload = require("./cloudinaryUpMiddleware.js");
const cloudinaryDelete = require("./cloudinaryDelMiddleware.js");

module.exports = {
  checkCar,
  cloudinaryUpload,
  cloudinaryDelete,
  imgUploader,
};
