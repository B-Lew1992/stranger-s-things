import React, { useEffect, useState } from "react";
import { APIURL } from "../index";
import { Link } from 'react-router-dom';
import MyForm from "./messages";


const Profile = ({ token }) => {
    const authorized = localStorage.getItem("token")
    console.log(token)
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        const myPost = async () => {
            const response = await fetch(`${APIURL}/users/me`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                
            })
            const result = await response.json()
            console.log(result)
            return result;
        };
        myPost();
        
    },);
    
    
  return (
    <div>
    <h1 style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '15px'
    }}>My Posts</h1>

    {posts.map(post => <div style={{
        backgroundColor: 'grey',
        border: '2px solid black',
        padding: '20px',

    }}>
                        <p style={{
                            fontWeight: "900",
                        }}>{post.title}</p>
                        <p>{post.location}</p>
                        <p>{post.price}</p>
                        <p>{post.description}</p>
                        {authorized ? <MyForm />: <></>}
                        <p>{post.messages}</p>
                        {authorized ? <Link to="/add"><button> Add Post</button></Link>: <></>} 
                        </div>)}

   
</div>
  );
};

export default Profile;
