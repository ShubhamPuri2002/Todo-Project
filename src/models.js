const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
    taskName : String,
    description : String,
    isCompleted : Boolean
})

const todo = mongoose.model("todo",todoSchema);
module.exports = {todo}