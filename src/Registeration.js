import React,{ Component } from "react";


class Registeration extends Component{

    constructor(props){
        super(props);
        this.state = {name:'',
            age:'',
            course:''
            };
    }

    name = (event)=>{
        this.setState({name: event.target.value});
    }

    age = (event)=>{
        this.setState({age: event.target.value});
    }

    course = (event)=>{
        this.setState({course: event.target.value});
    }

    whenClick = (event)=>{
        alert("Name : "+this.state.name+" Age : "+this.state.age+" Course : "+this.state.course);
        event.preventDefault();
    }

    render(){
        return (
            <form>
                <input type="text" value={this.state.name} onChange={this.name} />
                <br/>
                <input type="text" value={this.state.age} onChange={this.age} />
                <br/>
                <select value={this.state.course} onChange={this.course}>
                    <option>
                        Java
                    </option>
                    <option>
                        PHP
                    </option>
                    <option>
                        C++
                    </option>
                </select>
                <br/>
                <input type="submit" value="Submit" onClick={this.whenClick}/>
            </form>
        );
    }
}

export default Registeration;