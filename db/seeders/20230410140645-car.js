"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Cars",
      [
        {
          id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
          name: "Chevrolet Camaro Blue",
          type: "medium",
          rentPerDay: 200000,
          imgUrl:
            "https://res.cloudinary.com/dscsxprie/image/upload/v1681457743/car-api-challenge/adt79l7omtd8gy9ipflo.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
          name: "Dodge Charger 500",
          type: "large",
          rentPerDay: 300000,
          imgUrl:
            "https://res.cloudinary.com/dscsxprie/image/upload/v1681458286/car-api-challenge/pv7wvj9mia2ukva84fwd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "3206e974-c338-4230-95ca-2b3819fc5c65",
          name: "Karimun",
          type: "small",
          rentPerDay: 150000,
          imgUrl:
            "https://res.cloudinary.com/dscsxprie/image/upload/v1681458156/car-api-challenge/cfcdyfblicr3aslecanv.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Cars", null, {});
  },
};
