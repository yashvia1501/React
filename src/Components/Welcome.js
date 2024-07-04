import React, { Component } from 'react'

const Welcome= (props)=>{
    const {name, number} = props;
    return(
        <div>
          <h1>{name} {number}</h1>
          
        
        </div>
    ) 
}
export default Welcome
