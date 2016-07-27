var React=require('react');
var ReactDOM=require('react-dom');
var MailModal=require('./MailModal');
var Message=React.createClass(
  {
    getInitialState:function()
     {
       return {nameUp:'',
     showModal : false};

     },
     handleShowModal: function(){
       console.log("show");
       this.setState({showModal : true})
     },
     handleHideModal : function(){
       console.log("hide false");
       this.setState({showModal : false})
     },
    render:function()
    {
      return (
        <div>

          <div className="row">
            <div className="col-md-12">
          <ul><a id="modal-808820" href="#modal-container-808820" onMouseDown={this.handleShowModal}
          role="button" data-toggle="modal"><li> Msg ID:{this.props.All.msg_id} Hint:{this.props.All.Msg_snippet}</li></a>
          {this.state.showModal?<MailModal handleHideModal={this.handleHideModal} All={this.props.All} />:null}
          </ul></div>
          </div>
          </div>
            );
    }
});

module.exports=Message;
