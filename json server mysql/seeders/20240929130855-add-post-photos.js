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
    await queryInterface.bulkInsert('Photos', [
      // post 1
      {
        url: 'https://img.wongnai.com/p/1600x0/2019/12/25/183af5673b074e55a3842aca97676220.jpg',
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/1600x0/2019/12/25/54961e4326954765a80cd20e2044083d.jpg',
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/1600x0/2019/12/25/9bbcb032afc145d19e485defcf2067c1.jpg',
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/1600x0/2019/12/25/2974828fdb16492da0e8f35f627ade7a.jpg',
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // post 2
      {
        url: 'https://img.wongnai.com/p/1600x0/2019/06/04/371f3bfad9cd46399f30c8b04c816597.jpg',
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/1600x0/2019/06/04/93b7b555b624490680ebe7b0a16b0519.jpg',
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/1600x0/2019/06/04/bf2c001a72314452a261bff3f039ccdc.jpg',
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/1600x0/2019/06/04/37b377e43f344da794cb3353aeca3fcf.jpg',
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // post 3
      {
        url: 'https://img.wongnai.com/p/1600x0/2019/05/21/cd54e9c640694a95b7e0103b0ead5408.jpg',
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/1600x0/2019/05/21/cf792ff02ab0491b9f30d67d33634f78.jpg',
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/1600x0/2019/05/21/e87ce6e73c634532afd50dd02517fee9.jpg',
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/1600x0/2019/05/21/ea0f93584b3c4f3ba0680fcc11bc3a13.jpg',
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // post 4
      {
        url: 'https://img.wongnai.com/p/1920x0/2024/01/16/0317c033a4064dda8f1fe4852345c804.jpg',
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/1600x0/2019/05/21/cf792ff02ab0491b9f30d67d33634f78.jpg',
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/1600x0/2019/06/04/bf2c001a72314452a261bff3f039ccdc.jpg',
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/1600x0/2019/05/21/ea0f93584b3c4f3ba0680fcc11bc3a13.jpg',
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // post 5
      {
        url: 'https://img.wongnai.com/p/1920x0/2023/12/21/67407a56095b4c46a215e6b85afb5fab.jpg',
        postId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/800x0/2024/02/09/6a43ed8d572b48bf862e0a31c55e9e0c.jpg',
        postId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/800x0/2024/02/09/bb92c4db8a4247b7a3880430777e2133.jpg',
        postId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/800x0/2024/02/09/e27a0fbbb11e49eb8f62fdc9b076d593.jpg',
        postId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // post 6
      {
        url: 'https://img.wongnai.com/p/1920x0/2023/11/27/c9b3cf386b1b4d2e8ce153e9ee8017f3.jpg',
        postId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/1600x0/2023/11/21/f4a8f21744b7453c82e05cb57c5e659b.jpg',
        postId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/1600x0/2023/11/21/b89fb3d4c81648cdaeb5aa525efa0b0f.jpg',
        postId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://img.wongnai.com/p/1600x0/2023/11/21/5151e0e8d4f842e4b0256ae308522a9f.jpg',
        postId: 6,
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
    await queryInterface.bulkDelete('Photos', null, {});
  }
};
