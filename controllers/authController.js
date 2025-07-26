exports.showLogin = (req, res) => {
  res.render('auth/login');
};

exports.handleLogin = (req, res) => {
  // Your login logic here
};

exports.showRegister = (req, res) => {
  res.render('auth/register');
};

exports.handleRegister = (req, res) => {
  // Your register logic here
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/auth/login');
  });
};
