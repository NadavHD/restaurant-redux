import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewRes, deleteRes } from "../features/createSlice1";
import { Link, useNavigate } from "react-router-dom";

const CreateRes = () => {

  const dispatch = useDispatch()

  const nameRef = useRef()
  const cityRef = useRef()
  const imageRef = useRef()
  const priceRef = useRef()
  const cuisionRef = useRef()
  const onAddClick = () => {
    let createObj = {
      name: nameRef.current.value,
      city: cityRef.current.value,
      image: imageRef.current.value,
      price: priceRef.current.value,
      cuision: cuisionRef.current.value,
      id: Date.now()
    }
    console.log(createObj);
    dispatch(addNewRes({ createItem: createObj }))
    alert("new restaurant created")
  }
  return (
    <div style={{marginTop:"180px"}} className=" d-flex justify-content-center text-white ">
      <div className="col-md-6" style={{lineHeight:"40px"}} >
       
          <label>name:</label>
          <input ref={nameRef} className="form-control"type="text"placeholder="enter name:" />
          <label>city:</label>
          <input ref={cityRef}className="form-control" type="text" placeholder="enter city:"/>
          <label>image:</label>
          <input ref={imageRef}className="form-control"type="text" placeholder="enter image url:"/>
          <label>price:</label>
          <input ref={priceRef}className="form-control" type="number" placeholder="enter price:"/>
          <label>cuision:</label>
          <input ref={cuisionRef} className="form-control" type="text" placeholder="enter cuision:" />
          <div className="d-flex justify-content-center">
          <button className="btn btn-success my-4   mx-5" onClick={onAddClick}>Add new resturant</button>  
          </div> 
        <div className="d-flex justify-content-center">
          <Link to={'/'}><button className="btn btn-info btn-lg my-2" onClick={() => {
          }}>Back to home</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CreateRes;
