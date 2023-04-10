const multer = require("multer");

//define storage for multer config
const storage = multer.memoryStorage();

module.exports = multer({ storage });
