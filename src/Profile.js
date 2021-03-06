import React,{Component} from 'react'
import Card from './Card'

class Profile extends Component{

handleClick = (name)=>{
    console.log(name);
}

    render(){
      const profileData = [
          {name:"Rehan",title:"Java Developer",institue:"Mehran University"},
          {name:"Ali",title:"React Developer",institue:"Mehran University"},
          {name:"Fahad",title:"Mern Developer",institue:"Mehran University"},
          {name:"Darshan",title:"React Developer",institue:"Mehran University"},
          {name:"Kashif Ali",title:"Java Developer",institue:"Mehran University"},
          {name:"Sanaullah",title:"Mern Developer",institue:"Mehran University"},
          {name:"Shakeel",title:"Php Developer",institue:"Mehran University"},
        ];
      return (
        <React.Fragment>
            <Card profiles={profileData} handleClick = {this.handleClick}></Card>
        </React.Fragment>
      );
    } 
  }

 
  
  export default Profile;