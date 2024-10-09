import mongoose from "mongoose";

const ConfirmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  vegetarianMenu: {
    type: Boolean,
    required: true,
  },
  song: {
    type: String,
  },
  message: {
    type: String,
  },
  alergic: {
    type: String,
  },
   createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Confirm =
  mongoose.models.Confirm || mongoose.model("Confirm", ConfirmSchema);

export default Confirm;
