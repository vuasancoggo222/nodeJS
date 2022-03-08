const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
// app.get('/',(req, res) => {
//     res.send('Hello World')
//   })
// app.get("/api/products",(req, res) => {
//     const data = [
//    {id:1, name: "Prodcut A"},
//    {id:2, name: "Prodcut b"}
//     ]
//     res.json(data)
// })

app.get("/api/users",(req, res) => {
    const data = [
        {id:1, name: "User 1"},
        {id:2, name: "User 2"},
        {id:3, name: "User 3"},
    ]
    res.json(data)
})


app.listen(3001)
