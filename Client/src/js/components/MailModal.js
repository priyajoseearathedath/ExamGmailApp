var React = require('react');
var MailModal = React.createClass ({

 getInitialState: function(){

 return(
       {
   msg_id:this.props.All.msg_id,
   Msg_snippet:this.props.All.Msg_snippet,
 Msg_data:this.props.All.Msg_data,
 });
   },
   componentDidMount: function(){
     mdata=JSON.stringify(this.state.All);
     var html = atob(this.props.All.Msg_data.replace(/-/g, '+').replace(/_/g, '/'));
  this.appendPre(html);
   },
   appendPre: function(message)
 {
  document.getElementById('contents').innerHTML= message;

 },
   handleInsert:function(e){

       e.preventDefault();
       $.ajax({
         url:"http://localhost:8080/msg/mailbox/add",
         type:"POST",
         data:this.state,
         datatype:"json",
         success:function(data)
         {

         console.log(data);
         }.bind(this),
         error:function(err){
           console.log(err);
         }.bind(this)

       });
       console.log("Inserted");
       alert("Inserted to DataBase!!!")
     },

render: function()
{
return(
  <div className="modal fade" id="modal-container-808820" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">

          <button type="button" className="close" onClick={this.props.handleHideModal} data-dismiss="modal" aria-hidden="true">
            ×
          </button>
          Mail Details

        </div>

        <div className="modal-body">
        <div className="row" id="contents">

         {this.props.All.Msg_data}

        </div>

        <div className="modal-footer">

          <button type="button" onClick={this.props.handleHideModal} className="btn btn-default"  data-dismiss="modal">
            Close
          </button>
          <button type="button" onClick={this.handleInsert}  className="btn btn-primary">
            Save
          </button>
        </div>
      </div>

    </div>
  </div>
</div>
);}
}
);
module.exports = MailModal;
