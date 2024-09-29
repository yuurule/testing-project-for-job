'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert('Tags', [
      {
        name: 'จุดถ่ายรูป',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'หมู่บ้าน',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ภูเขา',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ธรรมชาติ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ถ่ายรูปสวย',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'บ้านอีต่องเหมืองปิล็อก',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'กาญจนบุรี',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ต่างประเทศ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ญี่ปุ่น',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ฟินแลนด์',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'หิมะ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ฮ่องกง',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'จีน',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'กินเที่ยว',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Tags', null, {});
  }
};
