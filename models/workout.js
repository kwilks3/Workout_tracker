const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          required: "Exercise type is required",
          trim: true,
        },
        name: {
          type: String,
          required: "Exercise name is required",
          trim: true,
        },
        duration: { type: Number, required: "Duration is required" },
        distance: { type: Number },
        weight: { type: Number },
        reps: { type: Number },
        sets: { type: Number },
      },
    ],
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);
workoutSchema.virtual("totalDuration").get(function () {
  let total = 0;
  this.exercises.forEach((element) => {
    total += element.duration;
  });
  return total;
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
