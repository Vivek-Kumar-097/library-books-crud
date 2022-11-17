import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddBook from './components/books/AddBook';
import EditBook from './components/books/EditBook';
import ViewBook from './components/books/ViewBook';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/books/add" component={AddBook} />
          <Route exact path="/books/edit/:id" component={EditBook} />
          <Route exact path="/books/:id" component={ViewBook} />
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
