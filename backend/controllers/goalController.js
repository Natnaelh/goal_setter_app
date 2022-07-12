const { text } = require("express");
const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res, next) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
  // console.log(req.body);
});

const setGoal = asyncHandler(async (req, res, next) => {
  // res.status(200).json({ message: " Set goal" });
  if (!req.body.text) {
    res.status(404);
    throw new Error("Please add a text field");
  } else {
    const goal = await Goal.create({
      text: req.body.text,
    });
    res.status(200).json(goal);
  }
});

const updateGoal = asyncHandler(async (req, res, next) => {
  const goalId = await Goal.findById(req.params.id);
  if (!goalId) {
    res.status(400);
    throw new Error("Goal not found!");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateGoal);
});

const deleteGoal = asyncHandler(async (req, res, next) => {
  const goalId = await Goal.findById(req.params.id);
  if (!goalId) {
    res.status(400);
    throw new Error("Goal not found!");
  }
  // await Goal.findByIdAndDelete(req.params.id);
  await goalId.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
