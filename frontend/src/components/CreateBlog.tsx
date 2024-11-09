import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [ title, setTitle ] = useState(""); 
  const [ description, setDescription ] = useState("");
  const navigate = useNavigate();

  const createBlog = async (title: string, description: string) => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                throw new Error("No authentication token found");
            }

            const userId = Number(JSON.parse(atob(token.split(" ")[1].split(".")[1])).userId)

            const body = {
                title: title,
                description: description,
                userId: userId
            }
            console.log(typeof(body));
            const response = await axios.post("http://localhost:3000/api/v1/blog/create", body, {
                headers: {
                    "Authorization": `${token}`,
                    "Content-Type": "application/json",
                }
            });
            console.log("Blog created: ", response.data);
            navigate("/home");
        } catch(err) {
            console.error(err);
            alert("cannot create blog, something bad happened!");
        }
    }

  return (
    <div className="min-h-screen bg-gray-100">
        <Navbar />
            <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Update Blog</h2>
                <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 mb-6 border border-gray-300 rounded-md resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                onClick={() => createBlog(title, description)}
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                >
                Create Blog
                </button>
            </div>
    </div>
  )
}
