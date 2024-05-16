// console.log('my server');
// const { text } = require('express')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')



app.get('/', (req, res) => {
    console.log('here')
    //  res.json({message: "Error"})
    
   
    res.download('server.js')
    res.render('index', { text: "world" })
})

const userRouter = require('./routes/users')
app.use('/users', userRouter)

app.listen(4000)