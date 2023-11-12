import { Component } from "react";
import React from "react";
import TodoForm from "./components/TodoForm";
import { Navbar,Container } from "react-bootstrap";
export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      list : []
    }
  }
  handleList = (inputData)=>{
    this.setState([...this.state.list,inputData])
  }
  render() {
    return (
      <div>
         <Navbar className="bg-dark"variant="dark">
        <Container>
          <Navbar.Brand href="#home">Todo App</Navbar.Brand>
        </Container>
      </Navbar>
       <TodoForm handleList={this.handleList}/>
      </div>
    )
  }
}



export default App;
