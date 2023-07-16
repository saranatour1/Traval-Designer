const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const randomNumber = Math.floor(Math.random() * 53) + 1;

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
      }
    },
    defaultUserInformation:{
    timeZone:{
      type:String, 
      default: Intl.DateTimeFormat().resolvedOptions().timeZone
    },
      imgUrl: {
        type: String,
        validate: {
          validator: val => /^https?:\/\/(?:[a-z\-]+\.)+[a-z]{2,6}(?:\/[^/#?]+)+\.(?:jpg|jpeg|png|gif)$/i.test(val),
          message: "Please enter a valid image URL"
        },
        default:`https://xsgames.co/randomusers/assets/avatars/pixel/${randomNumber}.jpg`
      },
        bio: {
          type: String,
          default: "Just a random person from a random city, with a passion for traveling and making new friends."
        },
        colorTheme: 
        {
          type: String,
          default:'bg-blue-400'
        },
        status: {
          type: String,
          default: 'Nothing To See here',
          expires: {
            type: String,
            enum: ['1s', '1m', '1h', '1d'],
            default: '1h'
          }
        }      
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"],
    },
  },
  { timestamps: true }
);


UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );


UserSchema.pre('validate', function(next) {
  // @ts-ignore
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Password must match confirm password');
  }
  next();
});

// @ts-ignore
UserSchema.pre('save', function(next) {

  // @ts-ignore
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
  
});



const User = mongoose.model("User", UserSchema);




module.exports = User;
