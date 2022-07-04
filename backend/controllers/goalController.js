const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler((req, res, next) => {
  res.status(200).json({ message: " get goals" });
  // console.log(req.body);
});

const setGoal = asyncHandler((req, res, next) => {
  // res.status(200).json({ message: " Set goal" });
  if (!req.body.text) {
    res.status(404);
    throw new Error("Please add a text field");
  }
});

const updateGoal = asyncHandler((req, res, next) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});

const deleteGoal = asyncHandler((req, res, next) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
