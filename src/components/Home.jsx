import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, useParams } from 'react-router-dom'
import {restaurantData} from './resturants'

const Home = () => {
  const {id} = useParams()

  
  
  
  return (
    <div>
      <Navbar/>
      <div className='d-flex flex-wrap justify-content-center gap-2'>
        {restaurantData.map((value,i)=>{
          return(
            <div className='border border-black   '>
           <Link to={`/resdetails/${value.id}`}> <div  key={i}> <img src={value.main_image} style={{height:"200px",width:"300px",padding:"20px"}} alt="" />
             </div></Link>
             <div className='px-2'>
                <h4>{value.name}</h4>
                <p>{value.city}</p>
                <p>{value.price}</p>
                <p>{value.cuisine}</p>
                <p>{value.name}</p>
                </div>

            </div>
          )
        })}
      </div>
      
      
    </div>
  )
}

export default Home