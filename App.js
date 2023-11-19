
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import TodoForm from "./components/TodoForm";
import Todolist from "./components/Todolist";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: JSON.parse(localStorage.getItem("todoList")) || [],
      editIndex : null
    };
    console.log(this.state.list,"k")
  }
  

 
 
  handleUpdate = (index) => {
    this.setState({
      editIndex: index,
    });  
   
  };
  

  render() {
    return (
      <div>
        <Navbar className="bg-dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Form</Navbar.Brand>
          </Container>
        </Navbar>

        <Routes>
          <Route
            path="/"
            element={<TodoForm  editIndex={this.state.editIndex}  handleUpdate = {this.handleUpdate} />}
          />
          <Route
            path="/show"
            element={<Todolist handleUpdate={this.handleUpdate}   />}
          />
        </Routes>
      </div>
    );
  }
}

export default App