'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'admin@mail.com',
        password: '$2a$10$5K8.xmEoIhGtS2MnJcrs8ObZYWLT5JfroUZrnQtQob/.R9j1vGfxy',
        createdAt: new Date,
        updatedAt: new Date,
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('schools', null, {});
  }
};