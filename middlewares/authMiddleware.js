//middleware handles access control.

exports.requireAuth = (req, res, next) => {

    console.log('Session user in middleware:', req.session.user);
  if (!req.session.user) {
    return res.redirect('./auth/login'); // redirect if not logged in
  }
       next();
};