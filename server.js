// server/server.js
const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://aakshey:LETSTRY0987654321@notesapp.v6uedr1.mongodb.net/?retryWrites=true&w=majority&appName=notesapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>console.log('Mongo connected'))
.catch((err)=>console.log(err));


const DocSchema = new mongoose.Schema({ content: String });
const Doc = mongoose.model('Doc', DocSchema);

app.get('/doc', async (req, res) => {
  let doc = await Doc.findOne();
  if (!doc) doc = await Doc.create({ content: '' });
  res.json(doc);
});

app.post('/doc', async (req, res) => {
  let doc = await Doc.findOne();
  doc.content = req.body.content;
  await doc.save();
  res.json(doc);
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  console.log('New client:', socket.id);

  socket.on('send-changes', (delta) => {
    socket.broadcast.emit('receive-changes', delta);
  });

  socket.on('save-doc', async (content) => {
    let doc = await Doc.findOne();
    doc.content = content;
    await doc.save();
  });
});

server.listen(4000, () => console.log('Server running on port 4000'));
