import React, { useRef } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const ref = useRef()
  const nav = useNavigate()
  return (
    <div>
        <div className='navColor container text-center my-4'>
          <div className='text-white' style={{height:"140px"}}> <h2>Find your table for any accosion</h2> <br />
          <input ref={ref} type="text" placeholder='state city or town' className='rounded p-2 w-25' />
          <button onClick={()=>{
            nav()
          }} className='btn btn-dark  mx-2'>lets go</button>
         <Link to={'/createres'}><button className='btn btn-danger' >add new restaurant</button></Link> 
          </div>
        
        </div>
        
      
    </div>
  )
}

export default Navbar