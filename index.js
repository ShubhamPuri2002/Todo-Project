const express = require("express");
const server = express();
const cors = require("cors")
const bodyParser = require("body-parser");
const{gettodo,addtodo,deletetodo,updatetodo} = require("./src/controllers")
const mongoose = require("mongoose");

server.use(bodyParser.json())

mongoose.connect("mongodb://0.0.0.0:27017/todo")
mongoose.connection.on("connected",() =>{
    console.log("Database Connected");
})

mongoose.connection.on("Error",() =>{
    console.log("Database Not Connected");
})

server.get("/gettodo",gettodo)
server.post("/addtodo",addtodo)
server.delete("/deletetodo",deletetodo)
server.put("/updatetodo",updatetodo)

server.listen(5000,() =>{
    console.log("Server started at port 5000")
})