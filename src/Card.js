import React,{Component} from 'react';
import './Card.css'

class Card extends Component{
    render(){
        return (
           this.props.profiles.map((data,index)=>{
                return (
                    <div className="card">
                        <h1>{data.name}</h1>
                        <p className="title">{data.title}</p>
                        <p>{data.institute}</p>
                        <p><button>Contact</button></p>
                    </div>
                )
            })
        )
    }
}

export default Card;