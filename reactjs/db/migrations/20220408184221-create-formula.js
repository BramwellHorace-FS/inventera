'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Formulas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      containerSize: {
        type: Sequelize.DECIMAL
      },
      containerFill: {
        type: Sequelize.DECIMAL
      },
      fragranceLoad: {
        type: Sequelize.DECIMAL
      },
      fragranceAmount: {
        type: Sequelize.DECIMAL
      },
      waxAmount: {
        type: Sequelize.DECIMAL
      },
      unitId: {
        type: Sequelize.UUID
      },
      note: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Formulas');
  }
};