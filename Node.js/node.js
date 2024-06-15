//create app.js file and add these

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
   res.sendFile(__dirname + "/MyFirstWebsite.html")
})

app.get('/signUp', (req, res) =>{
    res.send('SignUp page soon!')
})

app.use(express.static(__dirname));

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
//<!-- on the terminal run --> ------> 
//npm install express
//node app.js 

//<!-- for css or image to load --> 

app.use(express.static(__dirname));
