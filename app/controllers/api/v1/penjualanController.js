const penjualanService = require("../../../services/penjualanService");


module.exports = {
  async list(req,res){
    const id = req.params.id
    try {
        await penjualanService.list({id})
        .then((jual)=>{
          res.status(200).json(jual);
        })
    } catch (error) {
        console.error(error)
    }
},
  async listPembelian(req,res){
    const id = req.params.id
    console.log("tes id", id)
      await penjualanService
      .listPembelian({
        id
      })
      .then((jual)=>{
          res.status(200).json(jual);
        })

},

  create(req, res) {
    penjualanService
      .create({ 
        id_pembeli: req.body.id_pembeli,
        id_penjual: req.body.id_penjual,
        id_status: req.body.id_status,
        id_produk: req.body.id_produk,
        id_penawaran: req.body.id_penawaran,
        jumlahProduk: req.body.jumlahProduk,
        totalHarga: req.body.totalHarga,
      })
      .then((post) => {
        res.status(201).json(post);
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  update(req, res) {
    penjualanService
      .update(req.params.id, req.body)
      .then(() => {
        res.status(200).json({
          status: "OK",
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  show(req, res) {
    penjualanService
      .get(req.params.id)
      .then((post) => {
        res.status(200).json({
          status: "OK",
          data: post,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  destroy(req, res) {
    Penjualans
      .destroy({where:{id:req.params.id}})
      .then(() => {
        res.status(204).end();
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  onLost(req, res) {
    res.status(404).json({
      status: "FAIL",
      message: "Route not found!",
    });
  },

  onError(err, req, res, next) {
    res.status(500).json({
      status: "ERROR",
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};
