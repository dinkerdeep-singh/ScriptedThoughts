import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Blog() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState<any>({});
  const navigate = useNavigate();

  const getBlog = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await axios.get(`http://localhost:3000/api/v1/blog/blogs/${blogId}`, {
        headers: {
          "Authorization": `${token}`,
          "Content-Type": "application/json",
        },
      });
      setBlog(response.data.blogs);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteBlog = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authentication token found");
      }

      const userId = JSON.parse(atob(token.split(" ")[1].split(".")[1])).userId;
      const id = Number(blogId)

      const response = await axios.post(`http://localhost:3000/api/v1/blog/delete`, {
        userId,
        blogId: id
      }, {
        headers: {
          "Authorization": `${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("Blog deleted successfully:", response.data);
      navigate("/home");
    } catch (err) {
      console.error(err);
      alert("Unauthorised to delete this!")
    } 
  };

  useEffect(() => {
    if (blogId) {
      getBlog();
    }
  }, [blogId]);

  return (
    <>
      <Navbar />
        <div className="min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <article className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4 leading-tight">
              {blog.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {blog.description}
            </p>
          {/* Add more content if necessary */}
        </article>
        <div className="flex flex-row gap-2">
          <button onClick={() => deleteBlog()} className="bg-black text-white px-4 py-2 rounded hover:bg-red-900 mt-3">
            Delete
          </button>
          <button onClick={() => navigate(`/blog/${blogId}/update-blog`)} className="bg-black text-white px-4 py-2 rounded hover:bg-red-900 mt-3">
            Update
          </button>
        </div>
        
      </div>
    </>
  );
}