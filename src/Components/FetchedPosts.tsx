import React from "react";
import Post from "./Post";

interface Posts {
    posts: number[]
}


export default ({posts}:Posts): JSX.Element => {

    return (
        posts ?
            posts.map((post: number) => <Post post={post} key={post}/>)
            : <button className="btn btn-primary">Download posts</button>
    ) as JSX.Element
}