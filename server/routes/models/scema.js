var mongoose=require('mongoose');
var GmailSchema=mongoose.Schema(
  {
    msg_id:String,
  Msg_snippet:String,
  Msg_data:String,
});
module.exports=mongoose.model('MyTable',GmailSchema);
