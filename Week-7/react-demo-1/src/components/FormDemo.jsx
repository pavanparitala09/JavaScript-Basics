import { useForm } from "react-hook-form";

function FormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-3">
          <input
            className="border-2 m-3"
            type="text"
            {...register("username", { required: true, minLength: 3 })}
            id="username"
            placeholder="username"
          />
          {errors.username?.type === "required" && (
            <p className="text-red-700">Username is required</p>
          )}
          {errors.username?.type === "minLength" && (
            <p className="text-red-700">
              Username must be at least 3 characters
            </p>
          )}

          <br />

          <input
            className="border-2"
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            id="password"
            placeholder="password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-700">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-700">
              Password must be at least 6 characters
            </p>
          )}

          <br />

          <button className="border-1 m-3" type="submit">
            login
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormDemo;
