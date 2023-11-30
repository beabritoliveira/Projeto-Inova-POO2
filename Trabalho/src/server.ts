import express from 'express'

const app = express()

app.use(express.json())
app.get('/', function(req, res){
    res.send('OK!')
})

const port = 3000

app.listen(port, function(){
    console.log('Server running on port ${port}')
})