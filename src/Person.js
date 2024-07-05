import React from 'react'

function Person({person}) {
  return (
    <div>
      i am {person.name} {person.id}
    </div>
  )
}

export default Person
