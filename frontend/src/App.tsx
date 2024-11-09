import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./routes/Signin";
import LandingPage from "./routes/LandingPage";
import Signup from "./routes/Signup";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import CreateBlog from "./components/CreateBlog";
import UpdateBlog from "./components/UpdateBlog";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/blog/:blogId" element={<Blog />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/blog/:blogId/update-blog" element={<UpdateBlog />} />
          <Route path="/blog" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

