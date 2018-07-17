import React, { Component } from "react";
import SearchBookForm from "../../forms/SearchBookForm";
import { Segment } from "semantic-ui-react";

class NewBookPage extends Component {
  state = {
    book: null
  };

  render() {
    return (
      <Segment>
        <h1>Add new book to your collection</h1>
        <SearchBookForm />
      </Segment>
    );
  }
}

export default NewBookPage;
