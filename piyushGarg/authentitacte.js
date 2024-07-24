const exp = require('express')
const app = exp()

app.get('./something',(req,res) =>{
    return res.send('hii')
})


app.listen(3000,()=>{
    console.log('server started att port 3000')
})