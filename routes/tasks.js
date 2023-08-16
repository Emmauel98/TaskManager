const express = require("express");
const router = express.Router();
const Tasks = require("../models/tasks");
const {
  getAllTasks,
  getTaskById,
  createNewTasks,
  updateTasks,
  deleteTasks,
} = require('../controller/tasks');

router.use(express.json());

// router.get("/");

// router.get("/:id");

// router.post("/");

// router.patch("/:id");

// router.delete("/:id");

router.route('/').get(getAllTasks).post(createNewTasks);
router.route('/:id').get(getTaskById).patch(updateTasks)

module.exports = router;
