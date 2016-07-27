var React=require('react');
var ReactDOM=require('react-dom');
var Mail=require('./Message');
var MessageList=React.createClass(
  {
    render:function()
    {
      var MailNodes=this.props.data1.map(function(mail){
        return(<Mail All={mail} key={mail.msg_id}/>);
      }.bind(this));
      return (
        <div>
           {MailNodes}
        </div>
);
    }
});
module.exports=MessageList;
