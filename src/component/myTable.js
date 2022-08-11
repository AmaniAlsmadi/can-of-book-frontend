import react from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import axios from 'axios';


export default class TableOfBook extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }


    favBook = async () => {
        const book = await axios.get('http://localhost:3001/books');
        this.setState({ books: book.data });
    }

    componentDidMount() {
        console.log('My Best Books');
        this.favBook();
    }

    deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        this.favBook()
    }



    render() {
        return (
            <>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Book Title</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books.map((item, idx) =>
                                <tr key={idx}>

                                    <td>{idx + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.status}</td>
                                    <td><button onClick={() => this.deleteBook(item._id)}>Delete</button></td>
                                    <td><Link to={'/books/${item._id}'}><button>Update</button></Link></td>

                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </>
        )
    }
}