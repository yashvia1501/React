
import './App.css';
import Counter from './Components/Counter';
import Message from './Components/Message';
import Welcome from './Components/Welcome';
import React, { Component } from 'react'


// function App() {
//   return (
//     <div className="App">
//       <Welcome name="yashvi" number="1" />
//       <button>click</button>
//       <Welcome name="you"  number="2"/>
//     </div>
//   );
// }
class App extends Component{
  constructor(){
    super()
      this.state={
        name:"name: yashvi",
        number:" number: 1"
        
      }
    
  }
  changename(){
    this.setState({
      number:"number: 001"
    })
  }
  render(){
    return(
    <div className="App">
      <Counter/>
      <Message/>
    <Welcome name={this.state.name} number={this.state.number} >fsfffs</Welcome>
    <button onClick={()=>this.changename()}>click</button>
    
  </div>
    )

  }
}

export default App;
