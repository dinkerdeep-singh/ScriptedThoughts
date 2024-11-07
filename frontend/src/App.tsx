import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./routes/Signin";
import LandingPage from "./routes/LandingPage";
import Signup from "./routes/Signup";
import Home from "./routes/Home";
import Blog from "./routes/Blog";

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

