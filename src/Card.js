import React,{Component} from 'react';
import './Card.css'
import PropTypes from 'prop-types';

class Card extends Component{

    render(){
        return (
           this.props.profiles.map((data,index)=>{
                return (
                    <div className="card" key={index}>
                        <h1>{data.name}</h1>
                        <p className="title">{data.title}</p>
                        <p>{data.institute}</p>
                        <p><button onClick={()=>this.props.handleClick(data.name)}>Contact</button></p>
                    </div>
                )
            }) 
        )
    }
}

Card.propTypes = {
    profileData : PropTypes.string
  }

export default Card;