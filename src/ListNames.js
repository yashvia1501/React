import React from 'react'
import Person from './Person'

function ListNames() {
    const persons=[{
        id:1,
        name:'alex'
    },
    {
        id:2,
        name:'brew'
    }]
    const personList=persons.map((person,index)=> <Person key={person.id} person={person}/>)
  return (
    <div>
      {personList}
    </div>
  )
}

export default ListNames








