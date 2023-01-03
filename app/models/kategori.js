'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kategori extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Kategori.hasMany(models.Product, {
        as: 'Product',
        foreignKey: 'id_kategori'
      })
      // Kategori.hasMany(models.Notif, {
      //   as: 'Notif',
      //   foreignKey: 'id_kategori'
      // })
    }
  }
  Kategori.init({
    macam: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kategori',
  });
  return Kategori;
};