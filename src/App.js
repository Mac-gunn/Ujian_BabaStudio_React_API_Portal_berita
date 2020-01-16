import React,{Component} from 'react';
import Grid from './component/Grid';
import Home from './component/Home';
import News from './component/News';
import Footer from './component/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './style/style.css';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;
 
class App extends Component {
    render(){
      return(
        <Router>
        <div className="wrapper">

            
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="/"><img src={require('./component/images/opm1.jpg')} height="40px"></img></a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav ml-auto mr-4 mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/news">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/grid">About Us</a>
              </li>
            </ul>
        </div>
      </nav>



         <div className="">
        
 
            <Route path="/" exact component={Home}/>
            <Route path="/grid"  component={Grid}/>
            <Route path="/news" component={News}/>
         </div>
        
        <Footer/>
        </div>
        </Router>
      )
    }
}
 
export default App;