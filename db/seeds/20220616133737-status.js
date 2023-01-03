'use strict';

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
     await queryInterface.bulkInsert('Statuses', [{
      stat: 'Berhasil Terjual',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      stat: 'Negoisasi di WhatsApp',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      stat: 'Penawaran',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      stat: 'Batal',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
