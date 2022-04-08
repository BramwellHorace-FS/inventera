'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Formulas', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      containerSize: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      containerFill: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      fragranceLoad: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      fragranceAmount: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      waxAmount: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      unitId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Units',
          key: 'id',
        },
      },
      note: {
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Formulas');
  },
};
