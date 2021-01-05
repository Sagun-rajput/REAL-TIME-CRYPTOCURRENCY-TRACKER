import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import  'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css';
class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
              
                 
        <div><h3 class="name"><span class="glyphicon glyphicon-th">ACADZA</span></h3></div>

        <h5 id="too"> Tools<span class="glyphicon glyphicon-search"> </span></h5>

              <div class="sidenav nav-tabs nav-stacked">
            
                <div class="item"> <a href="#" class="nav-item"><span class="glyphicon glyphicon-search"> Dashboard </span> </a> </div>
                <div class="item">  <a href="#" class="nav-item"> Backlog Remover </a></div>
                <div class="item">  <a href="#" class="nav-item"> Rank up </a></div>
                <div class="item"> <a href="#" class="nav-item"> Speed up</a></div>
                <div class="item">  <a href="#" class="nav-item accuracy"> Accuracy up </a> </div>
                <div class="item">  <a href="#" class="nav-item"> Revision</a></div>
                <div class="item"> <a href="#" class="nav-item"> Test Creator </a></div>
                <div class="item">  <a href="#" class="nav-item"> Assignment Creator</a> </div>
                <div class="item">  <a href="#" class="nav-item"> Study Material</a></div>
                <div class="item"> <a href="#" class="nav-item"> Formula Sheet</a></div>
                <div class="item"> <a href="#" class="nav-item"> Sheet</a></div>
                   </div>


              <select name="dropdown" class= "drop mar">
                 <option value="Activity" selected hidden>Activity</option>
                 <option value="Option 1">Option 1</option>
                 <option value="Option 2">Option 2</option>
                 <option value="Option 3">Option 3</option>
                 <option value="Option 4">Option 4</option>
                 <option value="Option 5">Option 5</option>
              </select>

              <select name="dropdown" class= "drop mar" id="tool">
              <option value="Tool Guide" selected hidden>Tool Guide</option>
                 <option value="Option 1">Option 1</option>
                 <option value="Option 2">Option 2</option>
                 <option value="Option 3">Option 3</option>
                 <option value="Option 4">Option 4</option>
                 <option value="Option 5">Option 5</option>
              </select>


              <div class="corner">
                <img src="src/sagun.jpg" alt="img" class="img"></img>
              </div>


              <input type="text" class=" search " placeholder="Search..."/>
         
             <div class="mar head">
                <Header branding = "Real-Time Cryptocurrency graph"/>
             </div>
        <Body />
        </div>

      </div>
    );
  }
}

export default App;