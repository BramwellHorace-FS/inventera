'use strict';

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
      'Productions',
      [
        {
          id: '8afa212a-e459-4735-8776-09e96942faec',
          name: 'Summer Collection',
          quantity: 32,
          status: 0,
          dueDate: '2022-08-01',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          productionBoardId: '6249ef1c-c110-4070-bb11-5ede29a9979c',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '9c53e8a1-d80c-4de9-b89c-30b2f84a6391',
          name: 'Winter Collection',
          quantity: 32,
          status: 0,
          dueDate: '2022-08-08',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          productionBoardId: '6249ef1c-c110-4070-bb11-5ede29a9979c',
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
    await queryInterface.bulkDelete('Productions', null, {});
  },
};
