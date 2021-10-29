import React from "react";
import Post from "./Post";

interface ParentCompProps {
    childComp?: React.ReactNode;
}

interface Posts {
    posts: number[]
}

//take posts from Props interface
//and than use posts
//in the component the name must be the same as in the interface

export default ({posts}: Posts): JSX.Element => {
    return (
        posts ?
            posts.map((post: number) => <Post post={post} key={post}/>)
            : <p>No Posts</p>
    ) as JSX.Element
}