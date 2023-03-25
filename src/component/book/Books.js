import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Book from './Book';
const URL = "http://localhost:3333/books";
// const fetchHandler = async () => {
//   return await axios.get(URL).then((res) => res.data);
// };
const fetchHandler = async() => {
  return await axios.get(URL).then((res)=>res.data)
}
const Books = () => {
    const [books, setBooks] = useState();
    useEffect(() => {
      fetchHandler().then((data)=>setBooks(data.books))
    }, []);
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} fetchHandler={fetchHandler}  />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Books