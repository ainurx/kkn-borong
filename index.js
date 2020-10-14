const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res)=>{
  res.send('HI')
})

app.listen(PORT, ()=>{
  console.log('server is running')
})