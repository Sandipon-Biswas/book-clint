
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
 import "./Book.css";
const Book = (props) => {
  
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:3333/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      //  .then(() => history("/books"));
      
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>BDT: {price} TK</h3>
       <Link  to={`/books/${_id}`} >
        Update
      </Link>
      <button  onClick={deleteHandler} >
        Delete
      </button> 
    </div>
  );
};

export default Book;