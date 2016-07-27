var React=require('react');
var MessageList=require('./MessageList');
var MData=require('./MessageContent.json');
var InboxBox=React.createClass({
  getInitialState:function()
  {
    return {data1:[]};
  },
  inboxInfo:function()
  {
    this.setState({data1:MData});
  },
  componentWillMount:function()
  {
    this.inboxInfo();
  },
  render : function(){
  return(
      <div className="first">
      <h3>My Mail Box</h3>
      <MessageList data1={this.state.data1}/>
      </div>
  );
  }
});
module.exports=InboxBox;
