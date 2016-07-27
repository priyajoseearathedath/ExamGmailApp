var React = require('react');

var MailModalView = React.createClass ({
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
     // console.log("will "+mdata);

     var html = atob(this.props.All.Msg_data.replace(/-/g, '+').replace(/_/g, '/'));
         // console.log("materhtml "+html);
  this.appendPre(html);
   },
   appendPre: function(message)
 {
  document.getElementById('contents').innerHTML= message;

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
        </div>
      </div>

    </div>
  </div>
</div>
);
}
}
);
module.exports=MailModalView;