const mongoose = require('mongoose');

const Tasks = new mongoose.Schema({
    name:{
        type: String,
        maxLength: [20, 'Task is too lengthy'],
        trim: true,
        required: [true, 'Please add a Task Value']
    }
});

module.exports = mongoose.model('Tasks',Tasks)