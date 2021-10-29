import React from "react";
import Posts from "./Components/Posts";
import FetchedPosts from "./Components/FetchedPosts";
import PostForm from "./Components/PostForm";

export const App = () => {

    const arr = [1, 2, 3]

    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <PostForm/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>synchronized Posts</h2>
                    <Posts posts={arr}/>
                </div>
                <div className="col">
                    <h2>Async Posts</h2>
                    <FetchedPosts />
                </div>
            </div>
        </div>
    );
}

export default App;
