
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './component/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddBook from './component/AddBook';
import Books from './component/book/Books';
import About from './component/About';
import Home from './component/Home';
import BookDeatls from './component/book/BookDeatls';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    < Header />
    <div>
      <Routes>
        <Route path="/" element={ < Home /> } />
        <Route path="/add" element={ <AddBook/> } />
        <Route path="/books" element={ <Books/> } />
        <Route path="/books/:id" element={ <BookDeatls/> } />
        <Route path="/about" element={ < About /> } />

      </Routes>
    </div>
  </BrowserRouter>
    </div>
  );
}

export default App;
