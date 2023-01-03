'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.User, {
        foreignKey: 'id_penjual'
      })
      Product.belongsTo(models.Kategori, {
        foreignKey: 'id_kategori'
      })
      Product.hasMany(models.Penjualan, {
        as: 'Penjualan',
        foreignKey: 'id_produk'
      })
      Product.hasMany(models.Pembelian, {
        as: 'Pembelian',
        foreignKey: 'id_produk'
      })
      Product.hasMany(models.Penawaran, {
        as: 'Penawaran',
        foreignKey: 'id_produk'
      })
      Product.hasMany(models.Wishlist, {
        as: 'Wishlist',
        foreignKey: 'id_produk'
      })
    }
  }
  Product.init({
    id_penjual: DataTypes.INTEGER,
    id_kategori: DataTypes.INTEGER,
    nama_produk: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    stok: DataTypes.INTEGER,
    deskripsi: DataTypes.TEXT,
    foto: DataTypes.STRING,
    keterangan: {
      type: DataTypes.ENUM('active', 'disabled', 'sold'),
      defaultValue: 'active',
    }
    ,
    produkTerjual: DataTypes.INTEGER,
    disukai: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};