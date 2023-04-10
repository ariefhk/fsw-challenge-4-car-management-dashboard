exports.initAPI = (req, res) => {
  res.status(200).json({
    message: "Welcome to my Challenge 4 Project :D",
    data: {
      name: "Arief Rachman Hakim",
      class: "FSW-1",
    },
  });
};
