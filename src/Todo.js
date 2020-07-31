import React,{Component} from 'react';
import Item from './Item';

class Todo extends Component{

    constructor(props){
        super(props);
        this.state = {
            items:[],
            item:'',
            index:-1
        }
    }

itemValue = (event)=>{
    this.setState({item:event.target.value});
}

addItem = (event)=>{
    event.preventDefault();
    let itemList = this.state.items;
    let found = this.state.index;

    if(found > -1){
        itemList.splice(found,1,this.state.item)
        this.setState({index:-1});
    }
    else{
        itemList.push(this.state.item);
    }
    
    this.setState({items:itemList});
}

deleteItem = (event)=>{
    let itemList = this.state.items;
    itemList =itemList.filter(item=> item !== event);
    this.setState({items:itemList});
}

editItem = (event)=>{
    let itemIndex = this.state.items.indexOf(event);
    this.setState({index:itemIndex});
    this.setState({item:event})
}
render(){
    let itemList = this.state.items.map((item,index)=>{
        return(
            <Item key={index} item={item} deleteItem={this.deleteItem} editItem={this.editItem}/>
        )
    });

return (
    <React.Fragment>
    <form onSubmit={this.addItem}>
        <input type="text" value={this.state.item} onChange={this.itemValue}/>
        <input type="submit" value="Add Item" />
    </form>
    <table>
        <tr>
        <th>Item</th><th>Action</th>
        </tr>
    {itemList}
    </table>
    </React.Fragment>
);
}
}

export default Todo;