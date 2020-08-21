const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: { type: String, required: "Exercise type is required" },
      name: { type: String, required: "Exercise type is required" },
      duration: { type: Number, required: "Duration is required" },
      distance: { type: Number },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
    },
  ],
});

const Workout = mongoose.model("User", UserSchema);
model.exports = Workout;
