import React from 'react'

function Person({person}){
    return(
        <div>
            <h1>
                Name : {person.name}
            </h1>
            <h1>
                Age : {person.age}
            </h1>
            <h1>
                Subject : {person.subject}
            </h1>
        </div>
    )
}

export default Person;