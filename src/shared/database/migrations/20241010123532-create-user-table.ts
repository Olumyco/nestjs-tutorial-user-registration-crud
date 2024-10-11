'use strict';

import { Gender } from "src/modules/user/interfaces/user.interface";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      first_name: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(200),
        allowNull: false,
        unique: true
      },
      phone_number: {
        type: Sequelize.STRING(200),
        allowNull: false,
        unique: true
      },
      gender: Sequelize.ENUM(Gender.MALE, Gender.FEMALE),
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};
