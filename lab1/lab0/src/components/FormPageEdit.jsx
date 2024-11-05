import React, { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AppContext from "../data/AppContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function FormPageEdit({ id, name, birth, eyes, rating }) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const context = useContext(AppContext);
  const dispatch = context.dispatch;

  const onSubmit = (formData) => {
    console.log("Updated data for ID:", id, formData);
    dispatch({ type: "edit", item: { id, ...formData } });
    navigate("/lab4");
  };

  // Populate form with existing data
  useEffect(() => {
    setValue("name", name);
    setValue("birth", birth);
    setValue("eyes", eyes);
    setValue("rating", rating);
  }, [name, birth, eyes, rating, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container p-4">
      <h2 className="mb-4">Edit Form</h2>

      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input className="form-control" {...register("name", { required: true })} />
        {errors.name && <span className="text-danger">This field is required</span>}
      </div>

      <div className="mb-3">
        <label className="form-label">Birth Date:</label>
        <input type="date" className="form-control" {...register("birth", { required: true })} />
        {errors.birth && <span className="text-danger">This field is required</span>}
      </div>

      <div className="mb-3">
        <label className="form-label">Eye Color:</label>
        <input className="form-control" {...register("eyes", { required: true })} />
        {errors.eyes && <span className="text-danger">This field is required</span>}
      </div>

      <div className="mb-3">
        <label className="form-label">Rating:</label>
        <input type="number" className="form-control" {...register("rating", { required: true, min: 0, max: 10 })} />
        {errors.rating && (
          <span className="text-danger">This field is required and must be between 0 and 10</span>
        )}
      </div>

      <button type="submit" className="btn btn-primary w-100">Submit</button>
    </form>
  );
}

export default FormPageEdit;
