import Sequelize, { Model } from 'sequelize';

export default class Cliente extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      last_message: Sequelize.INTEGER,
      active: Sequelize.BOOLEAN,
    }, {
      sequelize,
    });
    return this;
  }
}
