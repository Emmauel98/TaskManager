const Tasks = require('../models/tasks')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getTaskById = async (req, res) => {
  const { id: taskId } = req.params;
  try {
    const tasks = await Tasks.findById(taskId);
    if (!tasks) {
      res.status(404).json({ msg: "Invalid" });
    }
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const createNewTasks = async (req, res) => {
  try {
    const tasks = await Tasks.create(req.body);
    return res.status(201).json({ tasks });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
const updateTasks = async (req, res) => {
  const { id: taskId } = req.params;
  const taskValue = req.body;
  try {
    const tasks = await Tasks.findByIdAndUpdate({ _id: taskId }, taskValue, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const deleteTasks = async (req, res) => {
  const { id: taskId } = req.params;
  const taskValue = req.body;
  try {
    const tasks = await Tasks.findByIdAndDelete({ _id: taskId });
    if (tasks == null) {
      res.json({ msg: "No Task Found To be deleted" });
    }
    return res.json({ success: true, msg: "tasks deleted" });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTasks, getTaskById, createNewTasks, updateTasks, deleteTasks };
