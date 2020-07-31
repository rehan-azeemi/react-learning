import React from 'react';


function Item(props){
    return (
        <tr>
            <td>{props.item}</td>
            <td><button onClick={()=>props.deleteItem(props.item)}>Delete</button></td>
            <td><button onClick={()=>props.editItem(props.item)}>Edit</button></td>
        </tr>
    )
}

export default Item;