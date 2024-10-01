const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/bmi', (req, res) => {
  let height = parseFloat(req.query.height);
  let weight = parseFloat(req.query.weight);

  let bmi = weight / (height * height);
  res.send(bmi.toString());
});

app.get('/checkout', (req, res) => {
  let product = req.query.product;
  let units = parseInt(req.query.units);
  let price = parseFloat(req.query.price);

  let total_price = price * units;
  res.send('Your total for ' + units + ' ' + product + ' is ' + total_price);
});

app.get('/grade', (req, res) => {
  let maths = parseFloat(req.query.maths);
  let science = parseFloat(req.query.science);
  let english = parseFloat(req.query.english);

  let gradeInPercentage = parseInt(((maths + science + english) / 300) * 100);
  res.send('Your grade in percentage is ' + gradeInPercentage + '%');
});

app.get('/discounted-price', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let discount = parseFloat(req.query.discount);

  let totalPrice = cartTotal - cartTotal * (discount / 100);
  res.send('Result: Your bill amount is ' + totalPrice);
});

app.get('/split-bill', (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseInt(req.query.numberOfFriends);

  let splitAmount = billAmount / numberOfFriends;
  res.send('Result: Each friend owes Rs. ' + splitAmount + ' against the bill');
});

app.get('/celsius-to-fahrenheit', (req, res) => {
  let temperature = parseFloat(req.query.temperature);

  let fahrenheit = (temperature * 9) / 5 + 32;
  res.send('Result: ' + fahrenheit + ' Fahrenheit');
});

app.get('/monthly-salary', (req, res) => {
  let totalHours = parseInt(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);

  let monthlySalary = hourlyWage * totalHours;
  res.send('Result: Your monthly salary is ₹' + monthlySalary);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
