import React, { Component } from 'react'

class ClassClick extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"hello"
        }
        // this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:"bye"
        })

    }
    // clickHandler=()=>{
    //   this.setState({
    //     message:"bye"
    //   })
    // }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)} >click to change to bye </button>
        {/* <button onClick={this.clickHandler}>clikc </button> */}
      </div>
    )
  }
}

export default ClassClick
