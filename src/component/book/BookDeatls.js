import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'

const BookDeatls = () => {

  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: ""
  });




  const id = useParams().id;
  console.log(id)
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:3333/books/${id}`)
        .then((res) => res.data).then(data=>setInputs(data.book))
        
    };
    fetchHandler();
  }, [id]);
  









  
  const [checked, setChecked] = useState(true);
  

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
 
  };
  // 
  const sendRequest = async () => {
    await axios
      .put(`http://localhost:3333/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };
  // 
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  }








  return (
    <>BookDeatls
    
    <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-4">
      <h5 className="text-center mt-1 mb-1">Update books</h5>
     { inputs && <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="name" className="form-label">Book Name:</label>
          <input type="text" className="form-control" id="name" name="name" value={inputs.name} onChange={handleChange} required />
        </div>
        <div className="mb-1">
          <label htmlFor="author" className="form-label">Author:</label>
          <input type="text" value={inputs.author} onChange={handleChange} className="form-control" id="author" name="author" required />
        </div>
        <div className="mb-1">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea value={inputs.description} onChange={handleChange} className="form-control" id="description" name="description" rows="3" required />
        </div>
        <div className="mb-1">
          <label htmlFor="price"  className="form-label">Price:</label>
          <input type="number" value={inputs.price} onChange={handleChange} className="form-control" id="price" name="price" required />
        </div>
        <div className="mb-1">
          <label htmlFor="author" className="form-label">Image URL:</label>
          <input type="text" value={inputs.image} onChange={handleChange} className="form-control" id="image" name="image" required />
        </div>

        <Form.Group className="" controlId="formBasicCheckbox">
        <Form.Check checked={checked} onChange={() => setChecked(!checked)} type="checkbox" label="Is available the book" />
      </Form.Group>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary btn-block mt-2">Update Book</button>
        </div>
      </form>}
    </div>
  </div>
</div>
    
    </>
  )
}

export default BookDeatls