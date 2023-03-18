import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    phonenumber: String,
  },
  { strict: false }
);

module.exports = mongoose.models.suppliers || mongoose.model("suppliers", SupplierSchema);