import React from 'react'
import "../component/Home.css"
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
    <div className="body">
    <div className="container">
		<Link to="/books" >
			<div className="button">
        <div className="star"></div>
				<div className="star s2"></div>
				<div className=" star s3"></div>
			<span>BooKs</span>
			</div>
			<div className="moon"></div>
		</Link>
	</div>
    </div>
    <div className="html">
        <div className="body"></div>
    </div>
    </>
  )
}

export default Home