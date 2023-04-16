import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { restaurantData } from './resturants'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRes } from '../features/createSlice1'

const Home = () => {

  const arr_res = useSelector(state => state.createSlice1.createRes)
  const dispatch = useDispatch()





  return (
    <div  >
      <Navbar />
      <div className='d-flex flex-wrap justify-content-center gap-2 '>
        {restaurantData.map((value, i) => {
          return (
            <div className='border border-black home-color  '>
              <div key={i}> <img src={value.main_image} style={{ height: "250px", width: "350px", padding: "20px" }} alt="" />
              </div>
              <div className='px-2'>
                <h4>name:{value.name}</h4>
                <p>city:{value.city}</p>
                <p>price:{Math.floor(Math.random() * 200)}{value.price} </p>
                <p>cuisine:{value.cuisine}</p>
              </div>
              <div className='justify-content-end d-flex mx-2 my-2'>
                <Link to={`/resdetails/${value.id - 1}`}><button className='btn btn-success '>More Details</button></Link>
              </div>
              

            </div>
          )
        })}
      </div>
      <div className='d-flex flex-wrap  justify-content-center   '>
      {arr_res.map((value,i)=>{
        return(
          <div className=' border border-black m-5 px-2 home-color ' key={i}>
          { <img style={{ height: "250px", width: "350px",padding:"20px"}} src={value.image} alt="" /> }
          <h1>name:{value.name}</h1>
          <p>city:{value.city}</p>
          <p>price:{value.price}$</p>
          <p>cuision:{value.cuision}</p>
          <div className='justify-content-end d-flex  mx-2 my-2'>
            <button onClick={()=>{
              dispatch(deleteRes({delId:value.id}))
            }} className='btn btn-danger '>delete</button>
            
          </div>
          </div>
          
        )
        })}
        
        </div>
        
      
    </div>
  )
}

export default Home