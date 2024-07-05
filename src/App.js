
import './App.css';
import ParentCompo from './Components/ParentCompo';

import FunctionClick from './Components/FunctionClick';
import Counter from './Components/Counter';
import Message from './Components/Message';
import Welcome from './Components/Welcome';
import React, { Component } from 'react'
import ClassClick from './Components/ClassClick';
import ListNames from './ListNames';
import styles from './appStyles.module.css';
import './appStyles.css';
import Form from './Components/Form';







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
      <h1 className='error'> error</h1>
      <h1 className={styles.success}>success</h1>
      <Form/>
      <ListNames/>
      <ParentCompo/>
      <ClassClick/>
      <FunctionClick/>
      <Counter/>
      <Message/>
    <Welcome name={this.state.name} number={this.state.number} >fsfffs</Welcome>
    <button onClick={()=>this.changename()}>click</button>
    
  </div>
    )

  }
}

export default App;
