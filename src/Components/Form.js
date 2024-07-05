import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:''
    }
  }
  handleUsernameChange=event=>{
    this.setState({
      username:event.target.value
    })
  }
  handleCommentsChange=event=>{
    this.setState({
      comments:event.target.value
    })
  }
  handleSubmit=event=>{
    alert(`form submitted for ${this.state.username}`)
  
  }
  
  render() {
    //const{username,comments}=this.state  =destrucuting, can use only username instaed of this.state.username
    return (
      <div>
        <label>username</label>
        <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
        <label>comments</label>
        <input type='textarea' value={this.state.comments} onChange={this.handleCommentsChange}/>
        <div>
          <button type="submit" onClick={this.handleSubmit}>SUBMIT</button>
        </div>
        </div>

    )
  }
}

export default Form
