const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 6; //the amount of rounds 

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true, //creates a unique index in the database which will trigger an error if validated
      trim: true, //can trim out the whitespace for us
      lowercase: true, //sets everything to lowercase
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        //doc is the original document, ret is the returned object that is stringified into JSON
        delete ret.password;
        return ret;
      },
    },
  }
);

// what do we want to hook into? the save
userSchema.pre("save", async function (next) {
  //as long as the password isn't modified/changed, return next b/c we dont want to mess with it
  if (!this.isModified("password")) return next();
  //you have to install bcrypt, it's a package used for cyber security
  //SALT_ROUNDS determines how much processing time it will take to perform the hash
  // it is also added to help differentiate two passwords that may be saved in the database to not look the same
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = mongoose.model("User", userSchema);
