const mongoose = require("mongoose");

const { Schema } = mongoose;

const TripSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
      minlength: [
        5,
        "Please add a title that is at least 5 characters or more!",
      ],
      maxlength: [
        100,
        "Please reduce the size of the title to be less than 100 characters!",
      ],
    },
    content: {
      type: String,
      maxlength: [
        1000,
        "Please make the description less than 1000 characters!",
      ],
    },
    likes: {
      like: {
        type: Number,
        default: 0,
      },
      likedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    },

    comments: [
      {
        content: {
          type: String,
          required: true,
        },
        commentBy: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        createdAt: {
          type: Date,
          default: new Date(),
        },
        updatedAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
    labels: [String],
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    toDoList: [
      {
        content: {
          type: String,
          required: true,
        },
        checked: {
          type: Boolean,
          default: false,
        },
        dateTime: {
          type: Date,
        },
        createdAt: {
          type: Date,
          default: new Date(),
        },
        updatedAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
    collab: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;
