var React=require('react');
var {render} =require('react-dom');
var {browserHistory, Route, Router,Link, IndexRoute} = require('react-router');
var InboxBox=require('./components/InboxBox');
var NavbarComponent= require('./components/NavbarComponent');
var Home= require('./components/Home');
var DataBox=require('./components/DataBox');
//ReactDOM.render(<MovieBox/>,document.getElementById('app'));
//ReactDOM.render(<MovieBoxView/>,document.getElementById('app'));
var Main=React.createClass({
  render:function()
{
return(<div>
  <NavbarComponent />
  <br/><br/><br/>
  {this.props.children}
</div>);
}});
render(
   <Router history = {browserHistory}>
      <Route path = "/" component = {Main}>
         <IndexRoute component = {Home} />
         <Route path= "Home" component = {Home} />
         <Route path = "InboxBox" component = {InboxBox} />
         <Route path = "DataBox" component = {DataBox} />
      </Route>
   </Router>, document.getElementById('app'));
