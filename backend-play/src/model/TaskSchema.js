import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },

  hr: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    default: "entry",
  },
});

// create the table inthe database and export the tabole

export default mongoose.model("task", taskSchema);
