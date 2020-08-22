const Workout = require("../models/workout");
const router = require("express").Router();

router
  .route("/api/workouts")
  .get(async (req, res) => {
    const data = await Workout.find({});
    res.json(data);
  })
  .post(async (req, res) => {
    const data = await Workout.create({});
    res.json(data);
  });

router.route("/api/workouts/:id").put(async (req, res) => {
  console.log(req.body);
  try {
    const data = await Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true, runValidators: true }
    );
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});
router.route("/api/workouts/range").get(async (req, res) => {
  const data = await Workout.find({}).limit(7);
  res.json(data);
});

module.exports = router;
