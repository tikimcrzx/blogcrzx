const mongoose = require('mongoose');
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require('bcryptjs');

const UserSchema = new Schema(
  {
    active: { type: Boolean, default: true },
    name: { type: String, required: true, maxlength: 50 },
    lastName: {
      type: String,
      required: true,
      maxlength: 100,
    },
    username: {
      type: String,
      required: true,
      maxlength: 30,
      unique: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, maxlength: 50 },
    banner: { type: String, maxlength: 50 },
    website: { type: String, maxlength: 100 },
    biography: { type: String },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: 'roles',
        required: true,
      },
    ],
  },
  { timestamps: true },
);

UserSchema.methods.toJSON = function () {
  let user = this.toObject();
  delete user.password;
  return user;
};

UserSchema.methods.comparePassword = function (password) {
  return compareSync(password, this.password);
};

UserSchema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;
  next();
});

module.exports = mongoose.model('users', UserSchema);
