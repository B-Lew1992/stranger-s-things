import "./App.css";
import React, { useEffect, useState } from "react";
import Register from "./components/register";
import PostsPage from "./components/posts";
import Login from "./components/login";
import Home from "./components/home";
import Add from "./components/add";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ColorSchemesExample from "./components/navbar";
import Profile from "./components/profile";

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>;

function App() {
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState('');
  useEffect(()=>{
    const myToken = localStorage.getItem("token")
    setToken(myToken)
  },[])

  return (
    <div>
      <ColorSchemesExample setToken={setToken} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register setToken={setToken} />} />
          <Route path="/posts" element={<PostsPage token={token} />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/Add" element={<Add token={token} posts={posts} setPosts={setPosts}/>} />
          <Route path="/profile" element={<Profile  setToken={setToken} token={token} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
