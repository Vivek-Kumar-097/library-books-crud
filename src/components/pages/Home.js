import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GrFormView } from 'react-icons/gr';
import { MdDelete, MdModeEdit } from 'react-icons/md';

const Home = () => {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    const result = await axios.get('http://localhost:3001/books');
    setBooks(result.data.reverse());
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    loadBooks();
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center mb-4 ">Welcome to XYZ Library</h1>
        <table className="table border shadow align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book Subject</th>
              <th scope="col">Book Title</th>
              <th scope="col">Author(s)</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book.id}>
                <th scope="row">{index + 1}</th>
                <td>{book.subject}</td>
                <td>{book.title}</td>
                <td>{book.authors}</td>
                <td className="text-center">
                  <Link
                    className="btn btn-primary me-2"
                    to={`/books/${book.id}`}
                  >
                    <GrFormView size={20} />
                  </Link>
                  <Link
                    className="btn btn-outline-primary me-2"
                    to={`/books/edit/${book.id}`}
                  >
                    <MdModeEdit size={20} />
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => {
                      deleteBook(book.id);
                    }}
                  >
                    <MdDelete size={20} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
