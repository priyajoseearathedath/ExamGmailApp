var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Mailb=require('./models/scema');

router.post("/mailbox/add", function (req, res) {
var mailObj = new Mailb({
msg_id:req.body.msg_id,
Msg_snippet:req.body.Msg_snippet,
Msg_data:req.body.Msg_data
});
console.log(mailObj);
mailObj.save(function (err, mailObj) {
  if (err) return console.error(err);
  console.dir(mailObj);
});
res.send(mailObj);
});

router.get("/mailbox/", function (req, res)
 {
Mailb.find({}, function (err, doc) {
  if (err) throw err;
  res.send(doc);
});
});
module.exports = router;
