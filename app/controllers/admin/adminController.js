const { Car } = require("../../models");

exports.renderHome = async (req, res) => {
  try {
    const msg = req.cookies;
    const cars = req.car;

    if (msg?.createMsg) {
      res.clearCookie("createMsg");
      res.render("index", {
        cars,
        saveMsg: msg.createMsg,
        deleteMsg: null,
        errorMsg: null,
      });
      return;
    }
    if (msg?.deleteMsg) {
      res.clearCookie("deleteMsg");
      res.render("index", {
        cars,
        saveMsg: null,
        deleteMsg: msg.deleteMsg,
        errorMsg: null,
      });
      return;
    }

    if (msg?.errorMsg) {
      res.clearCookie("errorMsg");
      res.render("index", {
        cars,
        saveMsg: null,
        deleteMsg: null,
        errorMsg: msg.errorMsg,
      });
      return;
    }

    res.render("index", {
      cars,
      saveMsg: null,
      deleteMsg: null,
      errorMsg: null,
    });
  } catch (error) {
    res.cookie("errorMsg", error.message);
    res.redirect("back");
  }
};

exports.renderCreate = (req, res) => {
  try {
    const msg = req.cookies;
    if (msg?.errorMsg) {
      res.clearCookie("errorMsg");
      res.render("pages/createCar", {
        saveMsg: null,
        deleteMsg: null,
        errorMsg: msg.errorMsg,
      });
      return;
    }
    res.render("pages/createCar", {
      saveMsg: null,
      deleteMsg: null,
      errorMsg: null,
    });
  } catch (error) {
    res.cookie("errorMsg", error.message);
    res.redirect("back");
  }
};

exports.renderUpdate = (req, res) => {
  try {
    const car = req.car;
    const msg = req.cookies;
    if (msg?.errorMsg) {
      res.clearCookie("errorMsg");
      res.render("pages/updateCar", {
        car,
        saveMsg: null,
        deleteMsg: null,
        errorMsg: msg.errorMsg,
      });
      return;
    }
    res.render("pages/updateCar", {
      car,
      saveMsg: null,
      deleteMsg: null,
      errorMsg: null,
    });
  } catch (error) {
    res.cookie("errorMsg", error.message);
    res.redirect("back");
  }
};

exports.adminCreateCar = async (req, res) => {
  try {
    const car = req.body;
    const imgUrl = req.imgUrl;
    //template  obj data
    const uploadData = {
      name: car.name,
      type: car.type,
      rentPerDay: Number(car.rentPerDay),
      imgUrl,
    };
    await Car.create({
      ...uploadData,
    });
    res.cookie("createMsg", "Data Berhasil Disimpan");
    res.redirect("/admin/cars");
  } catch (error) {
    res.cookie("errorMsg", error.message);
    res.redirect("/admin/cars");
  }
};

exports.adminDeleteCar = async (req, res) => {
  try {
    const car = req.car;
    await Car.destroy({ where: { id: car.id } });
    res.cookie("deleteMsg", "Data Berhasil Dihapus");
    res.redirect("/admin/cars");
  } catch (error) {
    res.cookie("errorMsg", error.message);
    res.redirect("/admin/cars");
  }
};

exports.adminUpdateCar = async (req, res) => {
  try {
    const car = req.car;
    const newData = req.body;
    const imgUrl = req.imgUrl || car.imgUrl;
    //template  obj data
    const uploadData = {
      name: newData.name || car.name,
      type: newData.type || car.type,
      rentPerDay: Number(newData.rentPerDay) || car.rentPerDay,
      imgUrl,
    };
    await Car.update(
      {
        ...uploadData,
      },
      { where: { id: car.id } }
    );
    res.cookie("createMsg", "Data Berhasil Diupdate");
    res.redirect("/admin/cars");
  } catch (error) {
    res.cookie("errorMsg", error.message);
    res.redirect("back");
  }
};
