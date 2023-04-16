import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNewRes,deleteRes } from "../features/createSlice";

const CreateRes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubForm = (_bodyData)=>{
    console.log(_bodyData);
  }

const dispatch = useDispatch()

  const nameRef = useRef()
  const cityRef = useRef()
  const imageRef = useRef()
  const priceRef = useRef()
  const cuisionRef = useRef()

  const onAddClick = ()=>{
    let createObj={
        name:nameRef.current.value,
        city:cityRef.current.value,
        image:imageRef.current.value,
        price:priceRef.current.value,
        cuision:cuisionRef.current.value,
        id:Date.now()
    }
    console.log(createObj);
    dispatch(addNewRes({createItem:createObj}))
  }
  return (

    <div className=" col-10 d-flex justify-content-center">
      <form onSubmit={handleSubmit(onSubForm)} id="id_form">
        <label>name</label>
        <input ref={nameRef}
          {...register("name", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.name && <div className="text-danger">* Enter valid name</div>}
        
        <label>city</label>
        <input ref={cityRef}
          {...register("city", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.city && <div className="text-danger">* Enter valid city</div>}
        <label>image</label>
        <input ref={imageRef}
          {...register("image", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.image && <div className="text-danger">* Enter valid image</div>}
        <label>price</label>
        <input ref={priceRef}
          {...register("price", { required: true, minLength: 2 })}
          className="form-control"
          type="number"
        />
        {errors.price && <div className="text-danger">* Enter valid price</div>}
        <label>cuision</label>
        <input ref={cuisionRef}
          {...register("cuision", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.cuision && (
          <div className="text-danger">* Enter valid cuision</div>
        )}
        
        
        <button onClick={onAddClick}>Add new resturant</button>
        <button onClick={()=>{
            window.confirm("are you sure you want to delete") && dispatch(deleteRes())
        }}>Delete</button>
      </form>
      
    </div>
  );
};

export default CreateRes;
