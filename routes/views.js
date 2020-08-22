const router = require("express").Router();
const path = require("path");

router.route("/exercise").get((req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.route("/stats").get((req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
