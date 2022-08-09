import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  favBook = async()=>{
const res = await axios.get('http:localhost:4040/books');
this.setState({books: res.data});
  }

  componentDidMount(){
    console.log( 'My Best Books' );
    this.favBook();
  }

  render() {
    return (
      <>
        <h1> Welcome </h1>
        {this.state.books.length ? (
           <Carousel variant="dark">
            {this.state.books.map( ( book, idx ) => (
           <Carousel.Item key ={idx} >
             <img
               className="d-block w-100"
               src='https://ibb.co/mSqqBgn'
               alt="slide"
             />
             <Carousel.Caption>
               <h5>{book.title}</h5>
               <p>{book.description}</p>
             </Carousel.Caption>
           </Carousel.Item>
         ))}
         </Carousel>
          
        ) : (
          <h4>No Books Found </h4>
        )}
      </>
    )
  }
}

export default BestBooks;
