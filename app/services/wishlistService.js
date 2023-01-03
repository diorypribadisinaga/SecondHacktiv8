const wishlistRepository = require("../repositories/wishlistRepository");

module.exports = {
    create(requestBody) {
        return wishlistRepository.create(requestBody);
    },

    async dapat({ id, idp }) {
        try {
            const wishlist = await wishlistRepository.findWishlist({ id, idp });
            // console.log("wishlist", wishlist);
            return wishlist;
        } catch (err) {
            throw err;
        }
    },
    async dapatBuyer({ id }) {
        try {
            const wishlist = await wishlistRepository.findWishlistBuyer({ id });
            // console.log("wishlist", wishlist);
            return wishlist;
        } catch (err) {
            throw err;
        }
    },

    async deleteWishlist({ id, idp }) {
        console.log("coba lihat id service", id, idp)
        try {
            const del = await wishlistRepository.deleteWishlist({ id, idp });
            return del;
        } catch (error) {
            throw err;
        }

    }

}