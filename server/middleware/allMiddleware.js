const checkAuthorisation = (req, res, next) => {
  console.log(req.session.user);
  if (req.session.user) {
    return next();
  }
  res.redirect('/users/signin');
};

module.exports = { checkAuthorisation};
