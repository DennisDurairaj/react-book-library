import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ConfirmEmailMessage from "../../messages/ConfirmEmailMessage";
import {allBooksSelector} from "../../../reducers/books";
import AddBookCtA from "../../ctas/AddBookCtA";
import {fetchShelf} from '../../../actions/books';

class DashboardPage extends React.Component {
  componentDidMount = () => this.onInit(this.props);

  onInit = (props) => props.fetchShelf();
  render() {
    const {isConfirmed, books} = this.props;
    return (
      <div>
        {!isConfirmed && <ConfirmEmailMessage/>}
        {books.length === 0 && <AddBookCtA/>}
      </div>
    );
  }

};

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  fetchShelf: PropTypes.func.isRequired,
  books: PropTypes
    .arrayOf(PropTypes.shape({title: PropTypes.string.isRequired}).isRequired)
    .isRequired
};

function mapStateToProps(state) {
  return {isConfirmed: state.user.confirmed, books: allBooksSelector(state)};
}

export default connect(mapStateToProps, {fetchShelf})(DashboardPage);
