import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, useParams } from 'react-router-dom'
import {restaurantData} from './resturants'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  // const {id} = useParams()

  const arr_res = useSelector(state=>state.createSlice1.createRes)
  // const dispatch = useDispatch()


  
  
  
  return (
    <div>
      <Navbar/>
      <div className='d-flex flex-wrap justify-content-center gap-2'>
        {restaurantData.map((value,i)=>{
          return(
            <div className='border border-black   '>
           <Link to={`/resdetails/${value.id-1}`}> <div  key={i}> <img src={value.main_image} style={{height:"200px",width:"300px",padding:"20px"}} alt="" />
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
        {arr_res.map((value)=>{
          <h1>{value.name}</h1>
        })}
      
    </div>
  )
}

export default Home