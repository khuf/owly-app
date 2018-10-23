import React, { Component } from "react";

class AddBooksPage extends Component {
  state = {};
  render() {
    return (
      <form>
        <div className="form-group">
          <ul>
            <input className="form-control" type="text" placeholder="title" />
            <input className="form-control" type="text" placeholder="year" />
            <input
              className="form-control"
              type="text"
              placeholder="publisher"
            />
            <input className="form-control" type="text" placeholder="pages" />
            <input className="form-control" type="text" placeholder="isbn-13" />
            <input className="form-control" type="text" placeholder="image" />
            <input
              className="form-control"
              type="textarea"
              placeholder="description"
            />
            <input
              className="form-control"
              type="text"
              placeholder="chapters"
            />
            <button
              type="button"
              className="form-control"
              onClick={() => {
                <input placeholder="chapters" />;
              }}
            >
              Add chapter
            </button>
            <input className="form-control" type="text" placeholder="author" />
            <button
              type="button"
              className="form-control"
              onClick={() => {
                <input placeholder="author" />;
              }}
            >
              Add author
            </button>
            <button className="form-control" type="submit">
              Submit
            </button>
          </ul>
        </div>
      </form>
    );
  }
}

export default AddBooksPage;
