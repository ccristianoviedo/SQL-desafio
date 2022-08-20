const express= require("express");
const {Server: IOServer} = require("socket.io");
const {Server: HttpServer} = require("http");
const Messages = require("./db/controller/messages")

const app = express();
const httpServer =  new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static("public"));

const messages = [
    { author: "Juan", text: "¡Hola! ¿Que tal?" },
    { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
    { author: "Ana", text: "¡Genial!" }
];

io.on('connection', (socket) => {    
    console.log('Un cliente se ha conectado')
    Messages.createTable()    
    socket.emit('messages', messages) 

    socket.on('new-message',data => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    })
})
app.get("/guardar",(req, res) => { 
   
    res.send(Messages.insert(messages))
     
});   
 
  
// El servidor funcionando en el puerto 3000
httpServer.listen(8080, () => console.log('SERVER ON PORT 8080'))