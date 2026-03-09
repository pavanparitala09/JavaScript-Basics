import { useEffect, useState } from "react";
import { useRef } from "react";

function Register() {
  const [role, setRole] = useState("user");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    image: null,
  });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { ...formData, role };
    console.log(payload);

    if (payload.role === "user") {
      let response = await fetch("http://localhost:3000/user-api/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const res = await response.json();
      console.log(res);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center py-10">
      {/* <h1 className="text-3xl font-semibold mb-8">Register.jsx</h1> */}

      <form
        onSubmit={handleSubmit}
        className="bg-gray-300 w-175 p-10 flex flex-col gap-6 rounded-2xl"
      >
        <div className="flex items-center justify-center gap-6 text-xl">
          <span>Select Role</span>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="user"
              checked={role === "user"}
              onChange={(e) => setRole(e.target.value)}
              className="w-5 h-5 accent-blue-500"
            />
            User
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="author"
              checked={role === "author"}
              onChange={(e) => setRole(e.target.value)}
              className="w-5 h-5 accent-blue-500"
            />
            Author
          </label>
        </div>

        <div className="flex gap-6">
          <input
            ref={inputRef}
            type="text"
            name="firstName"
            placeholder="First name"
            minLength={3}
            required
            onChange={handleChange}
            className="flex-1 p-4 bg-gray-400 placeholder-black outline-none"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            minLength={3}
            required
            onChange={handleChange}
            className="flex-1 p-4 bg-gray-400 placeholder-black outline-none"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          className="p-4 bg-gray-400 placeholder-black outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          minLength={6}
          onChange={handleChange}
          className="p-4 bg-gray-400 placeholder-black outline-none"
        />

        <input
          type="text"
          name="image"
          placeholder="image url"
          onChange={handleChange}
          className="p-4 bg-gray-400"
        />

        <button
          type="submit"
          className="bg-sky-500 text-black text-lg py-3 w-50 mx-auto cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
