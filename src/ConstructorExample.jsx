import React,{Component} from 'react';


class ConstructorExample extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : "www.google.com"
        }

       // this.click = this.click.bind(this);
    }

    click = ()=>{
        this.setState({data:"Rehan"});
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.data}/>
                <button onClick={this.click}>Click</button>
            </div>
        )
    }
}

export default ConstructorExample