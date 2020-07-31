import React, { Component } from 'react';
import User from './User';
import './UserRegisteration.css';
import './User.css';


class UserRegisteration extends Component{
    constructor(props){
        super(props)
        this.state = {
            users:[],
            name:'',
            age:'',
            userId:0,
            userSeq:0
        }
    }

    setFieldValue = (field)=>{
        const name = field.target.name;
        const value = field.target.value;
        this.setState(
            {
                [name]:value
            });
    }

    addUser = (event)=>{
        event.preventDefault();
        let usersList = this.state.users;
        let user;


        if(this.state.userId > 0){
            usersList = usersList.map(user=>{
                if(user.userId === this.state.userId){
                    user.name = event.target.name.value;
                    user.age = event.target.age.value;
                }

                return user;
            });

            this.setState({userId:0});
        }
        else{
            user = {
                userId:this.state.userSeq + 1,
                name : event.target.name.value,
                age : event.target.age.value
            }

            usersList.push(user);
        }

        
        this.setState({users:usersList,userSeq:this.state.userSeq+1});

        this.clearFields();
    }

    clearFields = ()=>{
        this.setState({name:'',age:''});
        
    }

    deleteUser = (userId)=>{
        this.setState({users:this.state.users.filter(user=>user.userId !== userId)});
    }

    editUser = (userId)=>{
        let usersList = this.state.users;
        let user = usersList.find(user=>user.userId === userId);
        this.setState({name:user.name,age:user.age,userId:user.userId})
    }

    render(){
        let usersList = this.state.users.map(user=>{
            return (
                <User key={user.userId} user={user} delete={this.deleteUser} edit={this.editUser}/>
            )
       });
        return(
        <React.Fragment>
        <div className="form">
        <form onSubmit={this.addUser}>
            <label>Name : </label><input type="text" name="name" value={this.state.name} onChange={this.setFieldValue}/>
            <br/>
            <label>Age : </label><input type="text" name="age" value={this.state.age} onChange={this.setFieldValue}/>
            <br/>
            <input type="submit" name="submit" value="Register" />
        </form>
        </div>
        <table className="table">
            <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
            {usersList}
        </tbody>
        </table>
        </React.Fragment>
        )
    }
}

export default UserRegisteration;