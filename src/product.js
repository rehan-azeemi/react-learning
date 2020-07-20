import React,{Component} from 'react';


class Product extends Component{
    render(){
        return (
           this.props.names.map((item,index)=>{
                return (
                    <div key={index}>
                        <p>
                            Name : {item.name}
                        </p>
                        <p>
                            Age : {item.age}
                        </p>
                    </div>
                )
            })
        )
    }
}

export default Product;