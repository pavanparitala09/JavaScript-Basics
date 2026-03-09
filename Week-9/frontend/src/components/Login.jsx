import { useState, useEffect, useRef } from "react";

function Login() {
  const [role, setRole] = useState("user");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log({ ...loginData, role });
    try {
      const payload = { ...loginData, role };
      let response = await fetch("http://localhost:3000/common-api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const res = await response.json();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-300 w-170 p-16 flex flex-col items-center gap-8 rounded-2xl"
      >
        <div className="flex items-center gap-6 text-xl">
          <span>Select Role</span>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="user"
              name="role"
              checked={role === "user"}
              onChange={(e) => setRole(e.target.value)}
              className="w-5 h-5 accent-sky-500"
            />
            User
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="author"
              name="role"
              checked={role === "author"}
              onChange={(e) => setRole(e.target.value)}
              className="w-5 h-5 accent-sky-500"
            />
            Author
          </label>
        </div>

        <input
          ref={inputRef}
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          className="w-125 p-4 bg-gray-400 placeholder-black outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          className="w-125 p-4 bg-gray-400 placeholder-black outline-none"
        />

        <button
          type="submit"
          className="bg-s
  ]ky-500 px-10 py-3 text-lg font-medium bg-blue-300 cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
