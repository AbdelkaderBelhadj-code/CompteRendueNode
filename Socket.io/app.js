const express = require("express");
const http = require("http");
var path = require("path");
const chatRouter = require("./routes/chat")

var app = express();
app.set("views",path.join(__dirname,"views"));
app.set("view engine","twig");

const server = http.createServer(app);

const io = require("socket.io")(server)

app.use("/chat",chatRouter);
io.on('connection', (socket)=> {
    console.log ('User Connected');
    io.emit("msg","A new user has been connected !");
    socket.on("disconnect",()=>{
        io.emit("msg","A user disconnected");
    })
    });


server.listen(3000,()=>console.log("server is run"));