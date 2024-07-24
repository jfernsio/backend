// console.log('my server');
// const { text } = require('express')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
// app.use(mogger)



app.get('/',mogger, (req, res) => {
    console.log('here')
    //  res.json({message: "Error"})
    
   
    // res.download('routes/users.js')
    res.render('index', { text: "world" })
})

const userRouter = require('./routes/users')
app.use('/users', userRouter)

function mogger  (req,res,next){
  console.log(req.originalUrl)
  next()
}

app.listen(4000)