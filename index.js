const express = require('express');
const session = require('express-session');
const userModel = require('./models/userModel');
const pgSession = require('connect-pg-simple')(session);
const db = require('./db/index'); // or adjust path as needed



const app = express();
const port = 3000;
app.use(session({
  store: new pgSession({
    pool: db,           
    tableName: 'session',
     createTableIfMissing: true
  }),
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // 1 day
}));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const layoutRoutes = require('./routes/layout');
const dashboardRoutes=require('./routes/dashboard')

// Routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/layout', layoutRoutes);  // mounted layout router
app.use('/dashboard',dashboardRoutes);


// Root route
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`server start at localhost:${port}`);
});
