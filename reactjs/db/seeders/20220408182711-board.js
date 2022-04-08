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
      'ProductionBoards',
      [
        {
          id: '6249ef1c-c110-4070-bb11-5ede29a9979c',
          name: 'To Do',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'd547df77-a18e-467e-a592-329770f31b6b',
          name: 'In Progress',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '300b1980-cf72-4148-83dd-f2571927f503',
          name: 'Done',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
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
    await queryInterface.bulkDelete('ProductionBoards', null, {});
  },
};
