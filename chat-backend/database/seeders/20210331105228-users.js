'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users',[
     {
       firstName: 'John',
       lastName: 'Doe',
       email: 'john.doe@gmail.com',
       password:bcrypt.hashSync('secret',10),
       gender:'male'
     },
     {
      firstName: 'Rosy',
      lastName: 'Jain',
      email: 'rosy.jain@gmail.com',
      password:'secret',
      gender:'female'
    },
    {
      firstName: 'Sam',
      lastName: 'Smith',
      email: 'sam.smith@gmail.com',
      password:'secret',
      gender:'male'
    },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
