var React=require('react');
var ReactDOM=require('react-dom');
var DataBoxList=require('./DataBoxList');
var DataBox=React.createClass({
  getInitialState:function()
  {
    return {data1:[]};
  },
  componentWillMount:function()
  {
    console.log("hello");
    $.ajax({
      url:'http://localhost:8080/msg/mailbox/',
      data:'GET',
      datatype:"JSON",
      success:function(data)
      {
        this.setState({data1:data});
        console.log("hello");
      }.bind(this),
      error:function(error)
      {
        console.log(error);
      }.bind(this)
    });
  },
  render : function(){
  return(
      <div className="first">
      <DataBoxList data1={this.state.data1}/>
      </div>
  );
  }
});
module.exports=DataBox;
