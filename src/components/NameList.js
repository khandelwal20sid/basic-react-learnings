import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ["Sid", "Bruce", "Clark"]
    // const NameList =  names.map(name => <h2>{name}</h2>)
    // return <div>{NameList}</div>


    const persons = [
        {
            id: 1,
            name:"Sid",
            age: 20,
            skill:"React"
        },
        {
            id: 2,
            name:"Bruce",
            age: 30,
            skill:"Angular"
        },
        {
            id: 3,
            name:"Clark",
            age: 25,
            skill:"Vue"
        }
    ]

    const personList =  persons.map(person =>(
        <Person key={person.id} person={person} />
    ))

    return <div>{personList}</div>
}

export default NameList
