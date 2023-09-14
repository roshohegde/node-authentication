// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

// Configure body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB (make sure MongoDB is running)
mongoose.connect('mongodb://localhost/user-auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
const User = require('./models/User'); // Define the User model

// Define a secret key for JWT
const secretKey = 'your_secret_key_here';

// ...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// ...

app.post('/register', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Basic validation checks
      if (!email || !password) {
        return res.status(400).json({ error: 'Both email and password are required' });
      }
  
      // Create and save the user if validation passes
      const user = new User({ email, password });
      await user.save();
  
      console.log('User registered successfully');
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ error: 'Registration failed' });
    }
  });
  
  
  
  
  // Authentication Route
  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const validPassword = await bcrypt.compare(password, user.password);
console.log('Password Comparison Result:', validPassword);

  
      if (!validPassword) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      // Create a JWT token
      const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Authentication failed' });
    }
  });
  
  // ...
  
  