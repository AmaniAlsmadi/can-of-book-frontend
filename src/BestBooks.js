import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './component/assets/book.jpg'
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  favBook = async()=>{
const book = await axios.get('https://app-book0.herokuapp.com//books');
this.setState({ books: book.data});
  }

  componentDidMount(){
    this.favBook();
  }

  
  render() {
    return (
      <>
        <h1> Welcome </h1>
        {this.state.books.length ? (
           <Carousel variant="dark">
            {this.state.books.map( ( item, idx ) => (
           <Carousel.Item key ={idx} >
             <img
               className="d-block w-100"
               src={`${Image}`}
               alt="slide" height='500px' width='500px'
             />
             <Carousel.Caption>
               <h5>{item.title}</h5>
               <p>{item.description}</p>
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
