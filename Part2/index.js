const fs = require("fs");
const express = require('express');
const app = express();
const { append } = require("vary");
const { json } = require("body-parser");
app.use(express.json());

app.get('/products',(req, res)=>{
    let temp = JSON.parse(fs.readFileSync('products.json'));
    res.send(temp);
    res.end();
})
app.post('/products/create',(req, res)=>{
    let data = {
            "product_name":"Ayur Shampoo",
            "type":"shampoo",
            "categeory":"bathroom accessories"
    }
    data = JSON.stringify(data);
    let temp = JSON.parse(fs.readFileSync('products.json'));
    console.log(temp);
    temp.products.push(data);
    temp = JSON.stringify(temp);
    fs.writeFileSync('products.json', temp);
    res.send("Hello world");
    res.end();
})

app.listen(7000)