var React=require('react');
var ReactDOM=require('react-dom');
var MailModalView=require('./MailModalView');
var DataBoxView=React.createClass(
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
     return(
       <div>

     <div className="row">

       <form>
       <div>
                    <a id="modal-808820" href="#modal-container-808820" onMouseDown={this.handleShowModal} data-toggle="modal">
         <ul>
          <li>{this.props.All.Msg_snippet}</li>
          </ul>
          </a>
          {this.state.showModal?<MailModalView handleHideModal={this.handleHideModal} All={this.props.All} />:null}
         </div>
           </form>

     </div>
   </div>
   );
 }
});
module.exports = DataBoxView;
