'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'brows',
      [
        {
          name: 'Taupe',
          description: 'A brow pomade that is used to fill and set brows in place.',
          photo_url: 'https://static.wixstatic.com/media/d8d143_b5566dea05374599b8d3e34c71536b81~mv2.jpg/v1/fill/w_313,h_313,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('brows', null, {})
  }
};