'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('schools', [
      {
        name: 'Sarah Dawsey',
        local: 'Bairro Imperial de São Cristóvão, Rua Principal, Nº 1.308',
        email: 'sarahdawsey@mail.com',
        tel: '(21) 2345-5498',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: 'Otávio Juqueira de Niz',
        local: 'Benfica, Rua Seis, Nº 265',
        email: 'otaviojuqueira@mail.com',
        tel: '(21) 9825-5477',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: 'São Bento',
        local: 'Bairro Vasco da Gama, Rua Aristides, Nº 1.875',
        email: 'saobento@mail.com',
        tel: '(21) 2345-5498',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: 'Pensi',
        local: 'Bairro Ipanema, Rua São Leopoldo, Nº 798',
        email: 'pensi@mail.com',
        tel: '(21) 9256-9688',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: 'Eleva',
        local: 'Bairro Laranjeiras, Rua Enseada, Nº 2.658',
        email: 'eleva@mail.com',
        tel: '(21) 6497-5858',
        createdAt: new Date,
        updatedAt: new Date,
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('schools', null, {});
  }
};