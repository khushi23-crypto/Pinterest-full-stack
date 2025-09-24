const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/nayaapp");

const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
  },
  likes: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
});

module.exports = mongoose.model("Post", postSchema);
