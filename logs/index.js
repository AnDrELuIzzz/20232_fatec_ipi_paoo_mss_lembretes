require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express();

app.use(express.json())

const Logs = {}
let id = 1

app.get('/logs', (req, res) => res.send(Logs))  

app.post('/eventos', (req, res) => {
  try{

    const data = new Date();
    let time = data.toLocaleTimeString();
    let date = data.toLocaleDateString();
    Logs[id] = {
        tipo: req.body.type,
        data: date + "|" + time 
    }
    id++
  }
  catch(e){}
  res.status(200).end() 
})


app.listen(
  process.env.PORT,
  () => console.log(`Logs: ${process.env.PORT}`)
)