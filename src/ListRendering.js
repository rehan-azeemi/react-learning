import React from 'react'
import Person from './Person'

function ListRendering(){
    const personList = [
        {
            name:"Rehan",
            age:25,
            subject:"Java"
        },
        {
            name:"Ali",
            age:24,
            subject:"Designing"
        },
        {
            name:"Tahir",
            age:23,
            subject:"C++"
        }
    ]
    
const persons = personList.map(person=>{
        return <Person person={person} />  
    }
);
    
return persons;
}




export default ListRendering;