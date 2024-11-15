const express = require('express');
const http = require('http').Server(express());  // Fixed 'http' require and express initialization
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://EV:EVpassword@evdb.0b2mo.mongodb.net/?retryWrites=true&w=majority&appName=EVdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

http.listen(3000, function () {
  console.log('Server running on port 3000');
});

