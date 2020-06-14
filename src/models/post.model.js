const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    title: { type: String, required: true, maxlength: 100 },
    banner: { type: String, required: true, maxlength: 50 },
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'categories',
        required: true,
      },
    ],
    content: { type: String, required: true },
    views: { type: Number },
    likes: { type: Number },
  },
  { timestamps: true },
);

module.exports = mongoose.model('posts', PostSchema);
