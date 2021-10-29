import React from "react";

interface Post {
    post: number
}

export default ({post}:Post) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    title {post}
                </h5>
            </div>
        </div>
    )
}