const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema(
  {
    comment: { type: String, required: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('comments', CommentSchema);
