const mongoose = require('mongoose');
const { Schema } = mongoose;

const RolSchema = new Schema(
  {
    rol: { type: String, required: true, maxlength: 20 },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('roles', RolSchema);
