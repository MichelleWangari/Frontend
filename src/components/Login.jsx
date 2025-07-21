import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    

    const handleSubmit = (e) => {
        e.preventDefault();
        //Add handlelogin logic when backend is ready
        console.log({email , password});

        if (email  && password) {
            navigate("/");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f9fafb] px-4">
            <div  className="bg-white shadow-2xl rounded-lg w-full max-w-md p-8 border-t-4 border-[#F4C542] mt-20" >
                <h2 className="text-2xl font-bold text-center text-[#475B06] mb-6">Welcome to Tujenge Chama Savings</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Email:</label>
                        <input
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#475B06]" placeholder="Enter your email" required
                        />
                    </div>
                    
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Password:</label>
                        <input
                        type="text" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#475B06]" placeholder="Enter your password" required
                        />
                    </div>
                       <button
                        type="submit"
                        className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded"
                        >
                        Login
                        </button>
                    <p className="text-center text-sm text-[#475B06] mt-6">Don't have an account yet?<Link to="/Signup" className="text-yellow-800 font-semibold ml-1 hover:underline hover:text-[#F4C542] ">Sign Up</Link></p>
                    <p className="text-center text-sm text-[#475B06] mt-6">Forgot password?</p>
                </form>
            </div>
        </div>
    )

} 