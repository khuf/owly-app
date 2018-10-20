import React, { Component } from "react";
import Navbar from "./Navbar";
import withAuthorization from "./withAuthorization";
import { db } from "../firebase";
import Card from "./card_template/card";
import "../assets/css/welcome_page.css";

class Dashboard extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    db.onceGetCourses().then(snapshot =>
      snapshot.forEach(p => {
        this.setState({ books: [...this.state.books, p.data()] });
      })
    );
  }

  render() {
    const { books } = this.state;

    return (
      <div>
        <Navbar />
        <div id="wrapper">{!!books && <BookList books={books} />}</div>
      </div>
    );
  }
}

const BookList = ({ books }) => (
  <div>
    <h2>List of books</h2>

    <div class="d-flex flex-row">
      {Object.keys(books).map(key => (
        <Card
          key={key}
          courseCode={books[key].title}
          courseName={books[key].title}
        />
      ))}
    </div>
  </div>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Dashboard);
