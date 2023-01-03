const { listPembelian } = require("../controllers/api/v1/penjualanController");
const penjualanRepository = require("../repositories/penjualanRepository");

module.exports = {
  create(requestBody) {
    return penjualanRepository.create(requestBody);
  },

  update(id, requestBody) {
    return penjualanRepository.update(id, requestBody);
  },

  delete(id) {
    return penjualanRepository.delete(id);
  },

  async list({id}) {
    try {
      const jual = await penjualanRepository.jual({id});
      return jual;
    } catch (err) {
      throw err;
    }
  },

  async listPembelian({ id }) {
    try {
      const jual = await penjualanRepository.jual1({ id });
      return jual;
    } catch (err) {
      throw err;
    }
  },

  get(id) {
    return penjualanRepository.find(id);
  },
};
