import React, { Component } from "react";
import SearchBookForm from "../../forms/SearchBookForm";
import { Segment } from "semantic-ui-react";
import BookForm from "../../forms/BookForm";

class NewBookPage extends Component {
  state = {
    book: null
  };

  onBookSelect = book => this.setState({ book });

  submit = book => console.log("submitted");

  render() {
    return (
      <Segment>
        <h1>Add new book to your collection</h1>
        <SearchBookForm onBookSelect={this.onBookSelect} />
        {this.state.book && (
          <BookForm submit={this.addBook} book={this.state.book} />
        )}
      </Segment>
    );
  }
}

export default NewBookPage;
