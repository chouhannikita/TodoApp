import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      desc: "",
      editMode: false,
      editIndex: null,
      list: JSON.parse(localStorage.getItem("todoList")) || [],
    };
    console.log(this.state.list);
  }
  componentDidMount() {
    const { editIndex } = this.props;

    if (editIndex !== undefined && editIndex !== null) {
      this.handleUpdate(editIndex);
    }
  
  }

  handleUpdate = (index) => {
    const { list } = this.state;
    if (index !== undefined && index !== null) {
      const editData = list[index];
      console.log(index);
      console.log(editData, "f");
      this.setState({
        title: editData.title,
        desc: editData.desc,
        editIndex: index,
        editMode: true,
      });
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const { title, desc, editMode, editIndex, list } = this.state;

    e.preventDefault();
    const data = {
      title: title,
      desc: desc,
    };

    if (editMode) {
      const updatedList = [...list];
      updatedList[editIndex] = data;
      this.setState({
        list: updatedList,
        title: "",
        desc: "",
        editMode: false,
        editIndex: null,
      });
      localStorage.setItem("todoList", JSON.stringify([...updatedList]));
    } else {
      console.log("add");
      this.setState({
        list: [...list, data],
        title: "",
        desc: "",
      });
      localStorage.setItem("todoList", JSON.stringify([...list, data]));
    }
  };

  render() {
    const { title, desc, editMode } = this.state;

    return (
      <div>
        <Form
          style={{ width: "500px", marginLeft: "400px", marginTop: "10px" }}
        >
          <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="title"
              name="title"
              value={title}
              onChange={this.handleChange}
              className="bg-secondary"
              style={{ color: "white" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="desc"
              value={desc}
              onChange={this.handleChange}
              className="bg-secondary"
              style={{ color: "white" }}
              required
            />
            <Button
              variant="success"
              size="lg"
              style={{ marginTop: "8px" }}
              onClick={this.handleSubmit}
            >
              {editMode ? "Update" : "Add"}
            </Button>{" "}
            <Link to="/show">
              <Button variant="success" size="lg" style={{ marginTop: "8px" }}>
                View
              </Button>
            </Link>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default TodoForm;
