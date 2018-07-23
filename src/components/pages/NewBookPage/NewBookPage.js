import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBookForm from "../../forms/SearchBookForm";
import { Segment } from "semantic-ui-react";
import BookForm from "../../forms/BookForm";
import { fetchPages } from "../../../actions/books";

class NewBookPage extends Component {
  state = {
    book: null
  };

  onBookSelect = book => {
    this.setState({ book });
    this.props
      .fetchPages(book.id)
      .then(pages => this.setState({ book: { ...book, pages } }));
  };

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

export default connect(
  null,
  { fetchPages }
)(NewBookPage);
