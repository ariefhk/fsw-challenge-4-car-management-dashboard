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
          name: "Avanza",
          category: "medium",
          rentPerDay: 200000,
          imgUrl:
            "https://res.cloudinary.com/dscsxprie/image/upload/v1680707946/car-api-test/rmlfydlj4q9t3tagpv3a.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
          name: "Rubicon",
          category: "large",
          rentPerDay: 300000,
          imgUrl:
            "https://res.cloudinary.com/dscsxprie/image/upload/v1680644128/car-api-test/mf6bo2h8qbgb0pm20hlv.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "3206e974-c338-4230-95ca-2b3819fc5c65",
          name: "Karimun",
          category: "small",
          rentPerDay: 150000,
          imgUrl:
            "https://res.cloudinary.com/dscsxprie/image/upload/v1681136456/car-api-test/karimun_sv4aoy.jpg",
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
