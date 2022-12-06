const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
    firstName: {
        type: String,
        require: true,
        trim: true
    },
    lastname: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require:true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 4
    },
    order: [Order.schema]
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };
  
  const User = mongoose.model('user', userSchema);
  
  module.exports = User;