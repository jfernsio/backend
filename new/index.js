
const { urlencoded } = require('express');
const express = require('express');
const app = express();
const users = require('./dummydata.json')
const fs = require('fs')
//middlewears --> plugins
app.use(urlencoded({extended:false}))

//routes
app.get('/users',(req,res) => {
    return res.json(users)
})

app.route('/users/:id')
.get((req,res) =>{
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
     return res.json(user)  
})
.post((req,res)=>{
    const body = req.body
    users.push({...body, id: users.length+1})
    fs.writeFile('./dummydata.json', JSON.stringify(users),(err,data) => {
        return res.json({status: 'success', id : users.length})
    })
    })
.patch((req,res) => {
    const body = req.body
    console.log(req.params.id)
    users[{body, id: req.params.id}]
    fs.writeFile('./dummydata.json', JSON.stringify(users), (err,data) => {
        return res.json({
            status:"success"
        })
    })
})
.delete((req,res)=>{
//    const body = req.body 
       const id = (Number(req.params.id)-1);
    //    console.log(id)
        
     users.splice(id,1)
     console.log( users.length);
      res.send('succes')
})

app.put('/users',(req,res)=>{
    console.log('pending')
})



app.listen(8000,function () {
    console.log('server started at port 8000');
})

/*
router.route('/:id')
.get((req,res) => {
    res.send(`get user with id ${req.params.id}`)
    console.log(req.user)
})
.put((req,res) => {
    res.send(`create user with id ${req.params.id}`)
    console.log(req.send)
})

*/