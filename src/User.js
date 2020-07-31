import React from 'react';



function User(props){
    
    return (
        <tr>
            <td>{props.user.name}</td>
            <td>{props.user.age}</td>
            <td><button onClick={()=>props.edit(props.user.userId)}>Edit</button></td>
            <td><button onClick={()=>props.delete(props.user.userId)}>Delete</button></td>
        </tr>
    )
}

export default User;