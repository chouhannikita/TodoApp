import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
class Todolist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: JSON.parse(localStorage.getItem("todoList")) || [],
      tododone : false,
      completedItems:[],
    };
  }

  handleCheck = (index) => {
    const {completedItems} = this.state
    completedItems[index] = !completedItems[index] 
    this.setState({completedItems});
  };
  handleDelete = (index) => {
    console.log(index,"d")
      const { list } = this.state;
      console.log("list",list)
      const newlist = [...list];
      newlist.splice(index, 1);
      this.setState({
        list: [...newlist],
      });
      console.log(newlist,"new")
      localStorage.setItem("todoList", JSON.stringify(newlist));
    };
  

  render() {
    const { list,completedItems } = this.state;

    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.desc}</td>
                  <td>
                    <Link to="/">
                      <Button
                        variant="success"
                        size="sm"
                        style={{ marginRight: "8px" }}
                        onClick={() => this.props.handleUpdate(index)}
                      >
                        Update
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      style={{ marginRight: "8px" }}
                      onClick={() => this.handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </td>
                  <td>
                  
                <input
                  type="checkbox"
                  style={{ marginLeft: "10px" }}
                  checked={completedItems[index] || false}
                  onChange={() => this.handleCheck(index)}
               />
                 <span style={{ color: "green" }}> {completedItems[index] ? "complete" : ""}</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Todolist;
