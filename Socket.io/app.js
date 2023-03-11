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
        socket.on('chat message', msgObj => {
            io.emit('chat message', msgObj);
        });
        console.log ('User Connected');
        socket.emit("msg","A new user has been connected !");
        socket.on("disconnect",()=>{
            io.emit("msg","A user disconnected");
        })
        socket.on("keyup", msg =>{
            io.emit('keyup',msg);
        });

    
     socket.on("typing", data => {
       
         io.emit("typing", data);
       });
});

// io.on("connection", socket => {
//     // Écouter l'événement "typing" émis par le client
//     socket.on("typing", data => {
//       // Diffuser l'événement "typing" aux autres clients connectés
//       socket.broadcast.emit("typing", data);
//     });
//   });



server.listen(3000,()=>console.log("server is run"));