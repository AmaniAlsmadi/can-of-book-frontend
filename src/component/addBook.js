import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default class AddForm extends Component {
  render() {
    return (
        <Form onSubmit={this.props.submitBook}>
        <Form.Group className="mb-3" >
          <Form.Label>Book Title</Form.Label>
          <Form.Control id="bookTitle" type="text" placeholder="Enter Title" />
        </Form.Group>
  
        <Form.Group className="mb-3" >
          <Form.Label>Description</Form.Label>
          <Form.Control id="bookDescription" type="text" placeholder="Tell us about the book" />
        </Form.Group>
        
        <Form.Group className="mb-3" >
          <Form.Label>Status</Form.Label>
          <Form.Control id="bookStatus" type="text" placeholder="Add status for your book" />
        </Form.Group>


        <Button variant="primary" type="submit">
        Create Book
        </Button>
      </Form>

    )
  }
}