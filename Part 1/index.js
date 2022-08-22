let express = require('express');
const app = express();
const DNS = require('dns');
let website="google.com";
app.use(express.json());

app.post('/getmeip', (req, res)=>{
    let ip ;
    console.log(req.body.website);
    website = req.body.website;
    DNS.lookup(`${website}`, function (err, addresses) {
        ip = addresses;
        console.log(`IP Address for requested site is : ${addresses}`);
        res.end(`IP Address for requested site is : ${ip}`);
    });
    
})

app.listen(7000);