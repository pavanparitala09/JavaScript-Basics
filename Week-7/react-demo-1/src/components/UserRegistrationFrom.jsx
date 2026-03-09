import { useState, useEffect } from "react";
import { useForm, } from "react-hook-form";

function UserRegistrationForm() {
  let [users, setUsers] = useState([]);

  let CheckDate = new Date("2020-1-1");

  useEffect(() => {
    console.log("USE EFFECT EXISUCETED")
  },[users])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const submitForm = (data) => {
    if (data.DOB < "2020-1-1") console.log("date is less than expected");
    setUsers([...users, data]);
    reset();
  };

  
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="register">
          <div>
            <input
              type="text"
              {...register("firstName", { required: true, minLength: 3 })}
              id="firstName"
              placeholder="Enter First Name"
              className="border-2 m-2"
            />

            {errors.firstName?.type === "required" && (
              <p className="text-red-600">First name is requires</p>
            )}
            {errors.firstName?.type === "minLength" && (
              <p className="text-red-600">min len shu be 3</p>
            )}
          </div>
          <div>
            <input
              type="text"
              {...register("lastName", { required: true, minLength: 3 })}
              id="lastName"
              placeholder="Enter Last Name"
              className="border-2 m-2"
            />
          </div>
          <div>
            <input
              type="email"
              {...register("email", { required: true })}
              id="email"
              placeholder="enter email"
              className="border-2 m-2"
            />
          </div>
          <div>
            <input
              type="date"
              {...register("DOB", { required: true })}
              id="DOB"
              placeholder="enter DOB"
              className="border-2 m-2"
            />
            {}
          </div>
          <div>
            <button type="submit" className="border-2 m-2">
              Add New User
            </button>
          </div>
        </div>
      </form>
      <h1 className="text-4xl text-blue-500 pb-3 font-bold">
        List of Users are
      </h1>
      <table className="text-center ml-65">
        <thead>
          <tr>
            <th className="text-center pr-5">First Name</th>
            <th className="text-center pr-5">Last Name</th>
            <th className="text-center pr-5">Email</th>
            <th>DBO</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border p-2">{user.firstName}</td>
              <td className="border p-2">{user.lastName}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.DOB}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserRegistrationForm;
