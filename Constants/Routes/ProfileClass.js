import React from "react";




class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
        //added a comment in here
     }
componentDidMount(){

}
    render(){  
        const {count} =this.state
        return(<div>
            
            <h1>This is class based profile</h1>
            <h2>Name by Class: {this.props.name}</h2>
        <h2>State by class : {count}</h2>
        <button onClick={()=>{
            this.setState({
                count:3,
            })

        }}>Click to Update count</button>
            </div>)
    }
}

export default Profile;