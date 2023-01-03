const wishlistService = require("../../../services/wishlistService");
const { Wishlist, Product, User } = require("../../../models");

module.exports = {
    createWishlist(req, res) {
        console.log("tes", req.body)
        wishlistService
            .create({
                id_user: req.body.id_user,
                id_produk: req.body.id_produk,
                diminati: req.body.diminati,
            })
            .then((wishlist) => {
                res.status(201).json(wishlist)
            })
            .catch((err) => {
                res.status(422).json({
                    status: "FAIL",
                    message: err.message,
                });
            });
    },

    semua(req, res) {
        Wishlist.findAll().then((wis) => {
            res.json(wis)
        })
    },

    getWishlist(req, res) {
        const id = req.params.id
        const idp = req.params.idp
        wishlistService
            .dapat({ id, idp })
            .then((wishlist) => {
                res.status(200).json(wishlist)
            })
            .catch((err) => {
                res.status(422).json({
                    status: "FAIL",
                    message: err.message,
                });
            });
    },
    getWishlistBuyer(req, res) {
        const id = req.params.id
        wishlistService
            .dapatBuyer({ id })
            .then((wishlist) => {
                res.status(200).json(wishlist)
            })
            .catch((err) => {
                res.status(422).json({
                    status: "FAIL",
                    message: err.message,
                });
            });
    },

    deleteWishlist(req, res) {
        const id = req.params.id;
        const idp = req.params.idp;
        console.log("coba lihat id", id)
        wishlistService.deleteWishlist({ id, idp }).then(() => {
            res.status(200).json({ msg: "Product Deleted" });
        }).catch(err => {
            res.status(422).json("Can't delete Product")
        })
    },
}