const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

// const dotenv = require("dotenv");
// dotenv.config({ path: "./.env" }); //.env setup
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
// app.use(express.json()); //body parser
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// routes
app.get("/", (req, res) => {
  res.send('hello');
});

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'INR'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  }) ;
})


app.get("*", (req, res) => {
  res.send("page does not exist!");
}); // this will overwrite other routes so it shouldn't be at the top.

app.listen(PORT, error => {
  if (error) throw error;
  console.log('Server running on port ' + PORT);
});
