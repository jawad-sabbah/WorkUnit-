//middleware handles access control.

exports.requireAuth = (req, res, next) => {
  
  if (!req.session.user) {
    return res.redirect('./auth/login'); // redirect if not logged in
  }
       next();
};