import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddBook = () => {
  let history = useHistory();
  const [book, setBook] = useState({
    subject: '',
    title: '',
    authors: '',
    publisher: '',
    edition: '',
    noofpages: '',
    isbn: '',
    shelfno: '',
  });

  const {
    subject,
    title,
    authors,
    publisher,
    edition,
    noofpages,
    isbn,
    shelfno
  } = book;

  const onChangeHandler = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:3001/books', book);
    history.push('/');
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add a Book</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Book Subject"
              name="subject"
              value={subject}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Book Title"
              name="title"
              value={title}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Book Author(s)"
              name="authors"
              value={authors}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Book Publisher"
              name="publisher"
              value={publisher}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Book Edition Number"
              name="edition"
              value={edition}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Number of Pages"
              name="noofpages"
              value={noofpages}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Book ISBN Number"
              name="isbn"
              value={isbn}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Shelf Number"
              name="shelfno"
              value={shelfno}
              onChange={onChangeHandler}
            />
          </div>
          <button className="btn btn-primary btn-block w-100">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
