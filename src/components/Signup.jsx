import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      name,
      phone_number: phoneNumber,
      password,
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/signup/", formData);

      console.log("Signup success:", response.data);
      navigate("/verify-otp");
    } catch (err) {
      console.error("Signup error:", err);
      setError("Signup failed. Please check your details.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Tujenge Chama Signup
        </h2>

        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

