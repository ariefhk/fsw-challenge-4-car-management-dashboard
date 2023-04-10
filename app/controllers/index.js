const { initAPI } = require("./initApiController.js");
const {
  getAllCar,
  getCar,
  deleteCar,
  createCar,
  updateCar,
} = require("./carController.js");

module.exports = {
  initAPI,
  getAllCar,
  getCar,
  deleteCar,
  createCar,
  updateCar,
};
