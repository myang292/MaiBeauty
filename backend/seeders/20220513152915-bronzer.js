'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'bronzers',
      [
        {
          name: 'Rio',
          description: 'A buildable bronzer that offers a sun-kissed glow to the face.',
          photo_url: 'https://static.wixstatic.com/media/d8d143_97906316cc4c460591cc9f0724534c70~mv2.jpg/v1/fill/w_313,h_313,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bronzers', null, {})
  }
};