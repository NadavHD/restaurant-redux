import React from "react";
import { restaurantData } from "./resturants";
import { useParams } from "react-router-dom";

const ResDetails = () => {
  const {id} = useParams()
  const details = restaurantData[id]
  return (
    <div>
      <div className="navColor container text-center my-4">
        <div className="text-white" style={{ height: "140px" }}>
          <h2>{details.name}</h2> 
          
          
        </div>
      </div>
      <div className="d-flex justify-content-center text-center">
      <div >
        <h3>{details.name}</h3>
        <p>{details.city}</p>
        <p>{details.description}</p>
        <img src={details.main_image} style={{height:"400px",width:"400px"}} alt="" />
      </div>
      </div>
    </div>
  );
};

export default ResDetails;
