const {Wishlist, Product, User, Kategori} = require("../models");

module.exports = {
    create(createBody) {
        return Wishlist.create(createBody);
    },

    findWishlist({id, idp}) {
        const wishlist = Wishlist.findOne({
            order: ['id'],
            where: {
                id_user:id ,
                id_produk:idp
            },
            include: [{
                model: User
            }, {
                model: Product, 
                include:[User]},
            ]
        });
        console.log("minat", wishlist)
        return wishlist
    },
    findWishlistBuyer({id}) {
        const wishlist = Wishlist.findAll({
            order: ['id'],
            where: {
                id_user:id 
            },
            include: [{
                model: User
            }, {
                model: Product, 
                include:[User, Kategori]},
            ]
        });
        console.log("minat", wishlist)
        return wishlist
    },

    deleteWishlist({ id, idp }) {
        console.log("coba lihat id repo", id, idp)
        const hapus = Wishlist.destroy({ 
            where: {
                id_user:id ,
                id_produk:idp 
            } })
        console.log("coba lihat hapus", hapus)
        return hapus;
      }
}