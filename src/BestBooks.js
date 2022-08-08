import React from 'react';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h1> Welcome </h1>
        <p> Please login to continue.</p>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
          
        ) : (
          <h4>No Books Found </h4>
        )}
      </>
    )
  }
}

export default BestBooks;
