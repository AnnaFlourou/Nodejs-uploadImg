var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('upload', { title: 'my world' });
});

/* Upload fichiers */
router.post('/uploaddufichier', upload.array('monfichier', 3), function (req, res, next) {
  if (req.files.every(file => file.size > 3000000)) {
    return res.status(500).send("file > 3Mo");
  }
  if (req.files.every(file => file.mimetype !== 'image/png')) {
    return res.status(500).send("file must be .png");
  }
  req.files.map(function (file) {
    fs.rename(file.path, 'public/images/' + file.originalname, function (err) {
      if (err) {
        res.send('Somethings went wrong');
      } else {
        res.send('Success');
      }
    })
  })
});
module.exports = router;
