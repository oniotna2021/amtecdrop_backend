const express = require('express');
const router = express.Router();

var epayco = require('epayco-sdk-node')({
    apiKey: '5ea90beb13cfef4ed7ae7037d43e6111',
    privateKey: 'f66c941c1ba90f76396c292413704664',
    lang: 'ES',
    test: true
})

router.get('/', async (req,res) => {
    epayco.customers.list()
    .then(function(customers) {
        console.log(JSON.stringify(customers.data));
    })
    .catch(function(err) {
        console.log("err: " + err);
    });
});




router.get('/token', async (req,res) => {
    var credit_info = {
        "card[number]": "4575623182290326",
        "card[exp_year]": "2025",
        "card[exp_month]": "12",
        "card[cvc]": "123"
    }
    epayco.token.create(credit_info)
        .then(function(token) {
            console.log(token);
        })
        .catch(function(err) {
            console.log("err: " + err);
        });
});

router.put('/:id', async (req,res) =>{
   
});

router.post('/',async (req,res) => {
   
});



module.exports = router;