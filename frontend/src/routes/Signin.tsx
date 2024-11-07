import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async (e: any) => {
        e.preventDefault();

        if (!username || !password) {
            setError("Username and password are required.");
            return;
        }

        const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
            username,
            password
        }).catch((error) => {
            if(error.response.status == 411)
                return navigate('/error')
        })

        const token = "Bearer " + (response.data.token || "");
        localStorage.setItem("token", token);

        navigate('/home');
    };

    return (
        <div className="flex min-h-screen bg-gray-50 items-center justify-center flex-col">
            <div className="flex items-center space-x-2 pb-4">
                <img src="/st-icon.svg" alt="Icon" className="w-6 h-6" />
                <Link to="/"><h2 className="text-4xl font-bold text-gray-800">Scripted Thoughts</h2></Link>
            </div>
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center text-gray-900">Sign In</h2>
                <form onSubmit={handleSignIn} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        {/* Username Input */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter your email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Sign In
                    </button>

                    <p className="text-sm text-center text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-indigo-600 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signin;
