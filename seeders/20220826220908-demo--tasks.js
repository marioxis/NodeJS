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
//Criando a lista de tarefa -Receita-
  await queryInterface.bulkInsert('Tasks',[
    { description: 'Amasse a ricota com um garfo',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { description: 'Leve a ricota para o liquificador',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { description: 'Addicione leite, ricota e marganina',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { description: 'Liquidifique até estiver homogeneo',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { description: 'Transfira para um pote fechado',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { description: 'Guarde na geladeira até esfriar',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *n
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
