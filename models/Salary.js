const mongoose = require("mongoose");
const salarySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    Basic: {
      type: Number,
      required: true,
    },
    LTA: {
      type: Number,
      required: true,
    },
    HRA: {
      type: Number,
      required: true,
    },
    FA: {
      type: Number,
      required: true,
    },
    Inv: {
      type: Number,
      required: true,
    },
    Rent: {
      type: Number,
      required: true,
    },
    CityType: {
      type: String,
      enum: ["Metro", "NonMetro"],
      required: true,
    },
    Med: {
      type: Number,
      required: true,
    },
    AppHRA: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Salary", salarySchema);
