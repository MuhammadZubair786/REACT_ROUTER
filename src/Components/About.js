import React from 'react'
import {Link} from 'react-router-dom'

class About extends React.Component{
   constructor(){
       super();
   }

   myfunc = () =>{
       this.props.history.push('/')
   }
    render(){
        return(
            <div>
                <h1>About Page</h1>
                {/* <Link to='/'>Home</Link> */}
                <button onClick={()=>this.myfunc()}>Go To Home</button>
            </div>
        )
    }
}

export default About