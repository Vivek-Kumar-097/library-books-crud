import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ViewBook = () => {
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

  const { id } = useParams();

  const loadBook = async () => {
    const result = await axios.get(`http://localhost:3001/books/${id}`);
    setBook(result.data);
  };

  useEffect(() => {
    loadBook();
  }, []);

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">Book Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item"><strong className='b'>Subject: </strong>{subject}</li>
        <li className="list-group-item"><strong>Title: </strong>{title}</li>
        <li className="list-group-item"><strong>Authors: </strong>{authors}</li>
        <li className="list-group-item"><strong>Publisher: </strong>{publisher}</li>
        <li className="list-group-item"><strong>Edition Number: </strong>{edition}</li>
        <li className="list-group-item"><strong>No. of Pages: </strong>{noofpages}</li>
        <li className="list-group-item"><strong>ISBN Number: </strong>{isbn}</li>
        <li className="list-group-item"><strong>Shelf Number: </strong>{shelfno}</li>
      </ul>
    </div>
  );
};

export default ViewBook;
