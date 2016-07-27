var React=require('react');
var ReactDOM=require('react-dom');
var DataBoxView=require('./DataBoxView');
var DataBoxList=React.createClass(
  {

    render:function()
    {
      console.log(this.props.data1);
      var MailNodes=this.props.data1.map(function(mail)
      {
        return(<DataBoxView All={mail} key={mail.msg_id}/>);
      }.bind(this));
      return (
        <div>
           {MailNodes}
        </div>
      );
    }
});
module.exports=DataBoxList;
