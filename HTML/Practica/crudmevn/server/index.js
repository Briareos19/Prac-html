const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/todoapp",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("open", () => {
    console.log("Connect to mongoDB");
});

db.on("error", (error) => {
    console.log(error);
});

let todomodel = require("./todo_schema")

app.get("/", (req,res) => {
    res.send("hello");
});

app.post("/todo/add", (req,res) => {
    let newTodo = new todomodel();
    newTodo.title = req.body.todo;
    newTodo.completed = false;
    newTodo.save(err => {
        if(err){
            console.log(err);
            res.send("Error adicionando Todo");
        }else{
            console.log(newTodo);
            res.send("Todo agregado");
        }        
    });
});

app.get("/todo/completed", (req,res) => {
    todomodel.find({completed: true}, (err,todos) => {
        if(err){
            res.send("error");
        }else{
            res.json(todos);
        }
    })
});

app.get("/todo/uncompleted", (req,res) => {
    todomodel.find({completed: false}, (err,todos) => {
        if(err){
            res.send("error");
        }else{
            res.json(todos);
        }
    })
});

app.post("/todo/complete/:id", (req, res) => {
    todomodel.findByIdAndUpdate(
        req.params.id, {completed:true},
        (err, todo) => {
            if (!err){
                res.send("buen trabajo");
            }
        }
    );
});

app.delete("/todo/:id", (req, res) => {
    let query = {_id: req.params.id};
    todomodel.deleteOne(query,err => {
            if (err){
                res.send("no se puedo eliminar");
            }else{
                res.send("eliminación con exito");
            }
        }
    );
});


app.listen(3000, ()=>{
    console.log("server started on port 3000")
});