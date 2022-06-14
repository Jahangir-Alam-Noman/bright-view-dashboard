import React from "react";
import { useForm } from "react-hook-form";

const AddItCourses = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="add_package custab">
      <p className="title text-start">Request IT Courses</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          defaultValue=""
          {...register("title")}
          placeholder="Course Title"
          className="launch_Camera"
        />

        <input
          {...register("img")}
          placeholder="Image link"
          className="launch_Camera"
        />

        <textarea
          {...register("description")}
          placeholder="Course Description"
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          {...register("price", { required: true })}
          placeholder="Price"
          className="launch_Camera"
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && (
          <span className="require">This field is required</span>
        )}

        <input type="submit" className="launch_submit" />
      </form>
    </div>
  );
};

export default AddItCourses;
