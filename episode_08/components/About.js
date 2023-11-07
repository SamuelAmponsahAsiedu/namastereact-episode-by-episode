import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);

        // console.log('parent constructor');
         
    }

    componentDidMount(){
        // console.log('Parent componentDidMount');
    }
    
    
    render(){
        // console.log('parent render')
        return(
        <div>
            <h1>This is the About page</h1>
            <UserClass name={'Sam'} location={'Berlin'} username={'@'}/>
        </div>
        )
    }

}

// const About = () => {
   

//     return (
//         <div>
//             <h1>This is the About page</h1>
//             <User name={'Sam (function)'} location={'London'} username={'@'}/>
//             <UserClass name={'Sam (class)'} location={'Berlin'} username={'@'}/>
//         </div>
//     )
// }

export default About;