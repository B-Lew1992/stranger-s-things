import React, { useEffect, useState } from 'react';
import MyForm from './messages';
import Add from './add';
import editPost from './edit';
import { Link } from 'react-router-dom';
const cohortName = '2204-FTB-ET-WEB-PT';


const PostsPage = (props) => {
    console.log("props", props);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getAllPosts = async () => {

            const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;
           
            const response = await fetch(`${APIURL}/posts`);
            
            const json = await response.json();
                console.log(json.data.posts);
            setPosts(json.data.posts);
        }

        getAllPosts();
    }, []);
    console.log(posts);

    const authorized = localStorage.getItem("token")


    return(
        <div>
            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '15px'
            }}>Posts</h1>

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
                                {authorized ? <Link to="/add"><button >Edit Post</button></Link>: <></>}
                                </div>)}

           
        </div>
    )
}

export default PostsPage;

