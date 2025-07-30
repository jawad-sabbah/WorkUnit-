//middleware handles access control.

exports.requireAuth = (req, res, next) => {
  
  if (!req.session.user) {
    return res.redirect('./auth/login'); // redirect if not logged in
  }
       next();
};

exports.requireAdmin = (req, res, next) => {
  if (!req.session.user || req.session.user.role !== 'admin') {
    return res.status(403).render('errors/access-denied');
  }
  next();
};
