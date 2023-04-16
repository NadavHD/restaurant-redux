import React from "react";
import { restaurantData } from "./resturants";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";



const ResDetails = () => {
  const {id} = useParams()
  const nav = useNavigate()
  const details = restaurantData[id]
  return (
    <div>
      <div className="navColor container text-center my-4">
        <div className="text-white" style={{ height: "140px" }}>
          <h2>{details.name}</h2> 
          
          
        </div>
      </div>
      <div className="d-flex justify-content-center text-center text-white">
      <div >
        <h3>restaurant name:{details.name}</h3>
        <p>city:{details.city}</p>
        <p>description:{details.description}</p>
        <img src={details.main_image} style={{height:"400px",width:"400px"}} alt="" />
      </div>
      </div>
      <div className="d-flex justify-content-center my-3">
      <button className="btn btn-info " onClick={()=>{
          nav(-1)
        }}>Back</button>
      </div>
      
    </div>
  );
};

export default ResDetails;
