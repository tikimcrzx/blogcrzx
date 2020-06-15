const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    category: {
      type: String,
      required: true,
      maxlength: 25,
      unique: true,
    },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('categories', CategorySchema);
