const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/perfumeDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB error:', err.message));

// schema
const Perfume = mongoose.model('Perfume', {
  name: String,
  brand: String,
  price: Number,
  image: String,
  description: String
});

// get cart
app.get('/scentshop', async (req, res) => {
  const items = await Perfume.find();
  res.send(items);
});

// add to cart
app.post('/scentshop', async (req, res) => {
  const item = new Perfume(req.body);
  await item.save();
  res.send(item);
});

// remove from cart
app.delete('/scentshop/:id', async (req, res) => {
  await Perfume.findByIdAndDelete(req.params.id);
  res.send('Deleted');
});

app.listen(5050, () => {
  console.log('Server running on port 5050');
});