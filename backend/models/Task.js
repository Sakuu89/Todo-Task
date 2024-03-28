const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false // Defaults to false, indicating task is not completed initially
  }
  
}, {
  timestamps: true
});


const Task = mongoose.model("Task", taskSchema);
module.exports = Task;