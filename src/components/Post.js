import React from "react";
import "./css/Post.css";
import Avatar from "@material-ui/core/avatar";

function Post({username, caption,imageUrl}) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar 
            className="post__avatar" 
            alt="" 
            src="" />
            <h3>{username}</h3>
      </div>

      
      {/* header -> avatar -> username */}

      <img
        className="post__image"
        src={imageUrl}
        
      />
      {/* image */}

      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;
