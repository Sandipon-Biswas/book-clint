import React, {  useEffect, useState } from 'react'

const About = () => {
  const [name, setname] = useState( { } );

 

useEffect(() => {
setname(  ["Saab", "Volvo", "BMW","bilop","Dino","boundu"])

}, [])


  return (
    <div>
      <div className=' h1 '> {name[0]}  </div>
      <div className=' h1 '> {name[1]}  </div>
      <div className=' h1 '> {name[2]}  </div>
      <div className=' h1 '> {name[3]}  </div>
      <div className=' h1 '> {name[4]}  </div>

    </div>
  )
}

export default About