const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  workspaceId: String,
  sender: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Chat", chatSchema);
