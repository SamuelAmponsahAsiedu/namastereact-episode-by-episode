import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        console.log('child constructor');
        this.state = {
            count1: 0,
            count2: 1,

            UserInfo:{
                name: 'dummy',
                location: 'Accra',
            }
        }
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/SamuelAmponsaHAsiedu');
        const json = await data.json();

        this.setState({
            UserInfo: json
        })
    }
    
    //never update state variables directly
    render(){
        console.log('child render');

        
        const {count1, count2} = this.state
        const {avatar_url, name, location} = this.state.UserInfo;
        return(
            <div>
                <img src={avatar_url} />
                <h2>{name}</h2>
                <h2>{location}</h2>
              
                <div>
                <h1>Count: {count1}</h1>
                <h1>Count: {count2}</h1>
                <button onClick={() => {
                    this.setState({
                        count1: this.state.count1 +1,
                    })
                }}>
                    Count Increase
                </button>
                </div>
              
            </div>
        )
    }
}

export default UserClass;