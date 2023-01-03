const { Product, User, Kategori, Notif, Penawaran, Status } = require("../../../models")

module.exports = {
    async Notif(req, res) {
        const result = await Notif.findAll({
            include: [{ model: Product }, { model: Penawaran }]
        })
        res.status(201).json(result)
    },

    async NotifUser(req, res) {
        let dijual = await Product.findAll({
            where: { id_penjual: req.params.id },
            order: ['updatedAt']
        })
        let penawaranmasuk = await Penawaran.findAll({
            where: { id_penjual: req.params.id },
            include: [{ model: User }, { model: Product }, { model: Status }],
            order: ['updatedAt']
        })

        let penawarankeluar = await Penawaran.findAll({
            where: { id_user: req.params.id },
            include: [{ model: User }, {
                model: Product, include: [User]
            }, { model: Status }],
            order: ['updatedAt']
        })
        const result = [{ kondisi: "dijual", dijual: [...dijual].reverse() }, { kondisi: "penawaranmasuk", penawaranmasuk: [...penawaranmasuk].reverse() }, { kondisi: "penawarankeluar", penawarankeluar: [...penawarankeluar].reverse() }]
        res.status(201).json(result)
    }

};