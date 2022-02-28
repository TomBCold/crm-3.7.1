const checkAuthorisation = (req, res, next) => {
  console.log(req.session.user);
  if (req.session.user) {
    return next();
  }
  res.redirect('/users/signin');
};

module.exports = { checkAuthorisation};

const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/img/');
  },

  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  }
});

const upload = multer({ storage });

module.exports = upload;
