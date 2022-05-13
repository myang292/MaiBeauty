'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'foundations',
      [
        {
          name: 'Almond',
          description: 'A light coverage cream foundation with a silky powder finish with anti-aging and wrinkle-reducing properties.',
          photo_url: 'https://static.wixstatic.com/media/d8d143_2b4c3fe0764944b8820131a257aa5431~mv2.jpg/v1/fill/w_313,h_313,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('foundations', null, {})
  }
};
