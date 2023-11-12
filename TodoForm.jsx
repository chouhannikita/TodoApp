import React, { Component } from "react";
import { Button, CardBody } from "react-bootstrap";
import { Form, Card } from "react-bootstrap";
export class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      desc: "",
    };
  }

  handleChange = (e)=>{
     const name = e.target.name
     const value = e.target.value
     this.setState((data)=>({...data,[name]:value}))

  }

  render() {
    const { title, desc } = this.state;
    return (
      <div>
        <Form
          style={{ width: "500px", marginLeft: "400px", marginTop: "100px" }}
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
            />
            <Button variant="success" size="lg"style={{marginTop:"8px"}}> Add </Button>{' '}
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default TodoForm;
