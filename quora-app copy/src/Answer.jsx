import React, { useState } from "react";
import { Comment } from "./Comment.jsx";

const Answer = (props) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="answer-card">
      <strong>{props.nick}:</strong> {props.text}{" "}
      <button onClick={handleLikeClick} className="like-button">Like</button> Likes: {likes}
    <div>
        <h4>Comments:</h4>
        {comments.map((comment, index) => (
          <Comment key={index} text={comment} />
        ))}
      </div>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <label>
          Add a Comment:
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </label>
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
};

export default Answer;
