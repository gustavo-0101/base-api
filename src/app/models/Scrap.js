/* eslint-disable import/no-duplicates */
// eslint-disable-next-line no-unused-vars
import sequelize from 'sequelize';
// Mapa do CRUD - Migration, Model (abstração da tabela no banco), Controller

import Sequelize, { Model } from 'sequelize';

class Scrap extends Model {
  // eslint-disable-next-line no-shadow
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        title: Sequelize.STRING,
        message: Sequelize.STRING,
        user_id: {
          type: Sequelize.UUID,
          references: {
            model: 'users',
            key: 'id',
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User);
  }
}

export default Scrap;
