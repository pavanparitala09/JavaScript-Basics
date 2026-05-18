import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Register() {
  const [role, setRole] = useState("user");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profileImageUrl: null,
  });

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [error, setError] = useState(null);
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, profileImageUrl: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // prepare FormData for file upload
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value);
      });
      payload.append("role", role);

      let response;
      if (role === "user") {
        response = await axios.post(
          "http://localhost:3000/user-api/register",
          payload,
          {
            headers: { "Content-Type": "multipart/form-data" },
          },
        );
      } else if (role === "author") {
        response = await axios.post(
          "http://localhost:3000/author-api/register",
          payload,
          {
            headers: { "Content-Type": "multipart/form-data" },
          },
        );
      }

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      setErr(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center py-10">
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
          className="text-black border p-2 rounded-2xl mr-100"
          type="file"
          accept="image/png, image/jpeg"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              if (!["image/jpeg", "image/png"].includes(file.type)) {
                setError("Only JPG or PNG allowed");
                return;
              }
              if (file.size > 2 * 1024 * 1024) {
                setError("File size must be less than 2MB");
                return;
              }
              const previewUrl = URL.createObjectURL(file);
              setPreview(previewUrl);
              setError(null);
              setFormData({ ...formData, profileImageUrl: file });
            }
          }}
        />

        {error && <p className="text-red-500">{error}</p>}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-32 h-32 object-cover mt-2"
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-sky-500 text-black text-lg py-3 w-50 mx-auto cursor-pointer"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {err && <p className="text-red-500 mt-2">Error: {err.message}</p>}
      </form>
    </div>
  );
}

export default Register;
