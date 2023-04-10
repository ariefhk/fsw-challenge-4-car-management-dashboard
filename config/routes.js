const router = require("express").Router();
const controller = require("../app/controllers");
const middleware = require("../app/middleware");
const prefix = "/api/v1";

router.get("/", controller.initAPI);
router.get(`${prefix}/admin`, controller.getAllCar);
router.post(
  `${prefix}/admin`,
  middleware.imgUploader.single("image"),
  middleware.cloudinaryUpload,
  controller.createCar
);
router.get(`${prefix}/admin/:id`, middleware.checkCar, controller.getCar);
router.delete(`${prefix}/admin/:id`, middleware.checkCar, controller.deleteCar);
router.put(
  `${prefix}/admin/:id`,
  middleware.checkCar,
  middleware.imgUploader.single("image"),
  middleware.cloudinaryUpload,
  controller.updateCar
);

module.exports = router;
