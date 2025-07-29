const express = require('express');
const session = require('express-session');
const userModel = require('./models/userModel');

const app = express();
const port = 3000;

app.use(session({
  secret: 'your-secret-key', // change in production
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // set true only with HTTPS
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const layoutRoutes = require('./routes/layout');

// Routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/layout', layoutRoutes);  // mounted layout router

// Root route
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`server start at localhost:${port}`);
});
