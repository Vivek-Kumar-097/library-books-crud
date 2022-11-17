import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditBook = () => {
  let history = useHistory();
  const { id } = useParams();
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
    shelfno,
  } = book;

  const onChangeHandler = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    await axios.put(`http://localhost:3001/books/${id}`, book);
    history.push('/');
  };

  const loadBook = async () => {
    const result = await axios.get(`http://localhost:3001/books/${id}`);
    setBook(result.data);
  };

  useEffect(() => {
    loadBook();
  }, []);

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
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
          <button className="btn btn-warning btn-block w-100">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
