import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function UpdateBook() {

    const { id } = useParams();
    const [book, setBook] = useState();

    async function fetchData() {
        const { data } = await axios.get(`https://app-book0.herokuapp.com/books/${id}`)
        setBook(data)
    }

    const update = async (e) => {
        e.preventDefault();
        const data = {
            'title': e.target.title.value,
            'description': e.target.description.value,
            'status': e.target.status.value
        }
        await axios.put(`https://app-book0.herokuapp.com/books/${id}`, { data })
    }

    useEffect(() => {
        fetchData();
    }, );

    return (
        <Form style={{ margin: "10px 30px" }} onSubmit={update}>
            <Form.Group className="mb-3" >
                <Form.Label>Book Title</Form.Label>
                <Form.Control id="title" type="text" defaultValue={book?.title} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Description</Form.Label>
                <Form.Control id="description" type="text" defaultValue={book?.description} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Status</Form.Label>
                <Form.Control id="status" type="text" defaultValue={book?.status} />
            </Form.Group>

            <Button variant="primary" type='submit'onClick={() => this.useEffect()}>
                Update
            </Button>
        </Form>

    )
}