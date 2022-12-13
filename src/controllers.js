const { response } = require("express");
const {todo} = require("./models");

//Reading

const gettodo = async(request,response)=>{
    var _id = request.query.id;
    if(_id){
        var Todos = await todo.findById(_id);
    }
    else{
        var Todos = await todo.find();
    }
    return response.json(Todos);
}

const addtodo = async(request,response)=>{
    console.log(request)
    await todo.create(request.body)
    return response.json({status:"added"})
}

const deletetodo = async(request,response) =>{
    var _id = request.query.id;
    var data = request.body;
    console.log(request.body)
    await todo.findByIdAndDelete(_id,data);
    return response.json({status:"deleted"})
}

const updatetodo = async(request,response) =>{
    var id=request.query.id;
    var data=request.body;
    var data1=request.query.taskName;

    if(id){
        var update_data= await todo.findByIdAndUpdate(id,data);
    }else if(data1){
        var update_data = await todo.findOneAndUpdate({taskName:data1},data);
    }

    return response.status(200).json({status:"Task is updated in to-do list..."});
}

module.exports={gettodo,addtodo,deletetodo,updatetodo}