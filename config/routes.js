const router = require("express").Router();
const controller = require("../app/controllers");
const middleware = require("../app/middleware");
const prefixApi = "/api/v1/cars";
const prefixAdmin = "/admin/cars";

// Restful Api | /api/v1/cars
router.get("/", controller.initAPI);
router.get(prefixApi, controller.getAllCar);
router.post(
  prefixApi,
  middleware.imgUploader,
  middleware.cloudinaryUpload,
  controller.createCar
);
router.get(`${prefixApi}/:id`, middleware.checkCar, controller.getCar);
router.delete(
  `${prefixApi}/:id`,
  middleware.checkCar,
  middleware.cloudinaryDelete,
  controller.deleteCar
);
router.put(
  `${prefixApi}/:id`,
  middleware.checkCar,
  middleware.imgUploader,
  middleware.cloudinaryUpload,
  controller.updateCar
);

// Admin | /admin/cars
router.get(prefixAdmin, middleware.adminFilterCar, controller.renderHome);
router.get(`${prefixAdmin}/create`, controller.renderCreate);
router.post(
  `${prefixAdmin}/create`,
  middleware.adminImgUploader,
  middleware.adminCloudinaryUpload,
  controller.adminCreateCar
);
router.get(
  `${prefixAdmin}/delete/:id`,
  middleware.adminCheckCar,
  middleware.adminCloudinaryDelete,
  controller.adminDeleteCar
);
router.get(
  `${prefixAdmin}/update/:id`,
  middleware.adminCheckCar,
  controller.renderUpdate
);
router.post(
  `${prefixAdmin}/update/:id`,
  middleware.adminCheckCar,
  middleware.adminImgUploader,
  middleware.adminCloudinaryUpload,
  controller.adminUpdateCar
);

module.exports = router;
