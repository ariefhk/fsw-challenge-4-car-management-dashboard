const { Car } = require("../../models");

const adminFilterCar = async (req, res, next) => {
  try {
    if (!req.query.type || req.query.type == "all") {
      if (req.query.search) {
        const car = await Car.findAll(); //params, query, body
        const filteredCar = await car.filter((car) =>
          String(car.dataValues.name).toLowerCase().includes(req.query.search)
        );
        req.car = filteredCar;
        next();
      }
      const car = await Car.findAll();
      req.car = car;
      console.log("Test Data: ", req.car);
      next();
    }

    const car = await Car.findAll();
    const filteredCarByType = await car.filter(
      (car) => car.dataValues.type == req.query.type
    );

    req.car = filteredCarByType;
    next();
  } catch (error) {
    res.status(500).json({
      message: "Error!",
      err_msg: error.message,
    });
  }
};

module.exports = adminFilterCar;
