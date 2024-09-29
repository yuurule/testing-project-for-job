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
    await queryInterface.bulkInsert('PostTags', [
      // post 1
      { postId: 1, tagId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 1, tagId: 2, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 1, tagId: 3, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 1, tagId: 4, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 1, tagId: 5, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 1, tagId: 6, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 1, tagId: 7, createdAt: new Date(), updatedAt: new Date(), },
      // post 2
      { postId: 2, tagId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 2, tagId: 8, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 2, tagId: 9, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 2, tagId: 4, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 2, tagId: 3, createdAt: new Date(), updatedAt: new Date(), },
      // post 3
      { postId: 3, tagId: 8, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 3, tagId: 10, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 3, tagId: 11, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 3, tagId: 4, createdAt: new Date(), updatedAt: new Date(), },
      // post 4
      { postId: 4, tagId: 8, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 4, tagId: 12, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 4, tagId: 5, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 4, tagId: 14, createdAt: new Date(), updatedAt: new Date(), },
      // post 5
      { postId: 5, tagId: 8, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 5, tagId: 9, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 5, tagId: 11, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 5, tagId: 14, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 5, tagId: 5, createdAt: new Date(), updatedAt: new Date(), },
      // post 6
      { postId: 6, tagId: 8, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 6, tagId: 13, createdAt: new Date(), updatedAt: new Date(), },
      { postId: 6, tagId: 14, createdAt: new Date(), updatedAt: new Date(), },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('PostTags', null, {});
  }
};
