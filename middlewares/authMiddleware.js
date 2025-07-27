//middleware handles access control.

exports.requireAuth = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect('./auth/login'); // redirect if not logged in
  }
  next(); // allow access if logged in
};