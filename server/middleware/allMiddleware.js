const checkAuthorisation = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  return res.redirect('/auth');
};
module.exports = { checkAuthorisation };

const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/img');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  }
});

const types = ['image/png', 'image/jpeg', 'image/gpg', 'application/pdf'];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });
module.exports = upload;
