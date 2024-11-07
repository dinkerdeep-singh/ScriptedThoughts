import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import axios from "axios";
import LoadingScreen from "../components/Loading";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [blogs, setBlogs] = useState([] as any);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const getBlogs = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await axios.get("http://localhost:3000/api/v1/blog/blogs", {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });
      setBlogs(response.data.blogs);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <LoadingScreen />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-12 mt-12">
          {blogs.map((blog: any, index: any) => (
            <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0" 
              onClick={() => {
                console.log(blog.blogId);
                navigate(`/blog/${(blog.blogId)}`);
              }}
            >
              <BlogCard
                title={blog.title}
                description={
                  blog.description.toString().length < 100
                    ? blog.description
                    : blog.description.slice(0, 100) + "..."
                }/>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
