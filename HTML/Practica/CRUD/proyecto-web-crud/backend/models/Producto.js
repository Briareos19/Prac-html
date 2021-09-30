const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema(
  {
    nombre: {
      type: String,
    },
    precio_compra: {
      type: Number,
    },
    precio_venta: {
      type: Number,
    },
    stock: {
        type: String,
    },
    detalle: {
    type: String,
    },
  },
  {
    collection: "inventario",
  }
);

module.exports = mongoose.model("inventario", productSchema);