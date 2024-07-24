const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.send('User Lists')
})

router.get('/new',(req,res) => {
    res.send("users new Form")
})

router.post('/',(req,res) => {
    res.send('Create user')
})

router.route('/:id')
.get((req,res) => {
    res.send(`get user with id ${req.params.id}`)
    console.log(req.user)
})
.put((req,res) => {
    res.send(`create user with id ${req.params.id}`)
    console.log(req.send)
})
.delete((req,res) => {
    res.send(`delete user with id ${req.params.id}`)
    console.log(req.send)
})

const users = [{name: "Kyle"},{nmae:"JOe"},{num :67,nmae:"djjd"}]
router.param("id",(req,res,next,id) =>{
    console.log(id);
    req.user = users[id]
    next();
})
module.exports = router;
