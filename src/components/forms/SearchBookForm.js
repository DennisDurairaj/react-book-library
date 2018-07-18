import React from "react";
import PropTypes from "prop-types";
import { Form, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchBooks } from "../../actions/books.js";

class SearchBookForm extends React.Component {
  state = {
    query: "",
    loading: false,
    options: [],
    books: {}
  };

  onSearchChange = (e, data) => {
    clearTimeout(this.timer);
    this.setState({
      query: data.searchQuery
    });
    this.timer = setTimeout(this.fetchOptions, 1000);
  };

  onChange = (e, data) => {
    this.setState({
      query: data.value
    });
    this.props.onBookSelect(this.state.books[data.value]);
  };

  fetchOptions = () => {
    if (!this.state.query) return;
    this.setState({
      loading: true
    });
    this.props.fetchBooks(this.state.query).then(books => {
      const booksHash = {};
      let options = books.map(book => {
        booksHash[book.id] = book;
        return { key: book.id, value: book.id, text: book.title };
      });
      this.setState({
        loading: false,
        options,
        books: booksHash
      });
    });
  };

  render() {
    return (
      <Form>
        <Dropdown
          search
          fluid
          placeholder="Search for a book"
          value={this.state.query}
          onSearchChange={this.onSearchChange}
          options={this.state.options}
          loading={this.state.loading}
          onChange={this.onChange}
        />
      </Form>
    );
  }
}

SearchBookForm.propTypes = {
  onBookSelect: PropTypes.func.isRequired
};

export default connect(
  null,
  { fetchBooks }
)(SearchBookForm);
