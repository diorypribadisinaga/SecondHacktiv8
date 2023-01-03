const { Penjualan, User, Product, Penawaran, Status, Kategori } = require("../models");

module.exports = {
  create(createBody) {
    return Penjualan.create(createBody);
  },

  update(id, updateArgs) {
    return Penjualan.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return Penjualan.destroy(id);
  },

  find(id) {
    return Penjualan.findByPk(id);
  },

  jual({id}) {
    return Penjualan.findAll({
      order:['id'],
      include: [{
        model: User
    }, {
        model: Product, 
        include:[Kategori]
    },{
        model: Penawaran, 
        include:[Status]
    },
    ],
    where:{
      id_penjual:id
    }
    });
  },

  jual1({id}) {
    console.log("tes jual1 id", id)
    return Penjualan.findAll({
      order:['id'],
      where:{
        id_pembeli:id
      },
      include: [{
        model: User
    }, {
        model: Product, 
        include:[Kategori, User]
    },{
        model: Penawaran, 
        include:[Status]
    },
    ]
    });
  },

  getTotalPenjualan() {
    return Penjualan.count();
  },
};
