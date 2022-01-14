const express = require('express');
const engine = require('express-handlebars');
const cryptos = require('./CryptocurrencyRates');
const wallet = require('./MyWallet');
const path = require('path');
const res = require('express/lib/response');
const app = express();
const port = 3000

app.engine('handlebars', engine.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req,res) => res.render('index', {
    cryptos
}));

app.get('/myWallet', (req,res) => res.render('myWallet', {
    wallet
}));

app.get('/api/CryptocurrencyRates', (req, res) => res.json(cryptos));
app.get('/api/myWallet', (req, res) => res.json(wallet));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))