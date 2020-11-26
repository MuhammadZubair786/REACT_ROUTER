import React from 'react'
import {BrowserRouter as Router,Route,} from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'

class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>


        </Router>
      </div>
    )
  }
}

export default App