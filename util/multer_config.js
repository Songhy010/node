const multer = require('multer');
const filenamify = require('filenamify');
const path = require('path');
const uuidv1 = require('uuid/v1');

exports.imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: (req, file, cb) => {
    const filename = `${uuidv1()}-${file.originalname}`;
    cb(null, filenamify(filename));
  }
});

exports.fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: (req, file, cb) => {
    const filename = `${uuidv1()}-${file.originalname}`;
    cb(null, filenamify(filename));
  }
});

exports.multer = multer({
  storage: this.fileStorage,
  limits: { fieldSize: Number.MAX_VALUE }
});
exports.imageUpload = multer({
  storage: this.imageStorage,
  limits: { fieldSize: Number.POSITIVE_INFINITY }
});
exports.fileUpload = multer({
  storage: this.fileStorage,
  limits: { fieldSize: Number.POSITIVE_INFINITY }
});