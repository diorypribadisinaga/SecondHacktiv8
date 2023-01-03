"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Wishlists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_user:{
        type: Sequelize.INTEGER
      },
      id_produk:{
        type: Sequelize.INTEGER
      },
      diminati : {
        type: Sequelize.ENUM('yes', 'no'),
        defaultValue: 'no',
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
    await queryInterface.dropTable("Wishlists");
  },
};
