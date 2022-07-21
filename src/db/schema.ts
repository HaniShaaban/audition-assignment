import mongoose, { Schema } from "mongoose";
import { PHASE_STATUS } from "../data/seed";

const phaseSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  order: Number, // used this field to know the sequence of the phases
  status: {
    type: String,
    default: PHASE_STATUS.PENDING,
    enum: PHASE_STATUS,
  },
});

const taskSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  completed: {
    type: Boolean,
    default: false,
  },
  phase: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "phase",
  },
});
