import { useState } from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";

export default function Post(props) {
  // console.log(props.user);
  const commentsToDisplay = props.comments.map((comment) => (
    <div key={comment.id}>
      <h5
        style={{
          color: "black",
          marginBottom: "0px",
          fontFamily: "monotype corsiva",
        }}
      >
        {comment.name}
      </h5>
      <p style={{ color: "grey", marginTop: "0px" }}>{comment.body}</p>
      <hr />
    </div>
  ));

  const [showLike, setShowLike] = useState(false);
  const [countLike, setCountLike] = useState(0);

  const commentCount = props.comments.length;

  const likeHandler = () => {
    setShowLike(!showLike);
    if (!showLike) setCountLike(countLike + 1);
    else setCountLike(countLike - 1);
  };

  const [showComment, setShowComment] = useState(false);
  const commentsHandler = () => {
    setShowComment(!showComment);
  };

  return (
    <div className="post-card">
      <Link to={`/users/${props.user[2]}`} style={{ textDecoration: "none" }}>
        <div className="username-block">
          <p className="user">{props.user[0]}</p>
          <p className="username">@{props.user[1]}</p>
        </div>
      </Link>
      <hr />
      <h3 className="post-title">{props.post.title}</h3>
      <p className="post-body">{props.post.body}</p>
      <hr />
      <div className="post-buttons">
        <button
          className={`${showLike ? `like` : `notLike`}`}
          onClick={likeHandler}
        >
          {showLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </button>
        <div className="count-like">{countLike}</div>
        <button className="comment" onClick={commentsHandler}>
          <ModeCommentOutlinedIcon />
        </button>
        {commentCount}
        <button className="share">
          <ShareIcon />
        </button>
      </div>
      {/* <button className="view-comments" onClick={commentsHandler}>
        View all comments
      </button> */}
      {showComment && commentsToDisplay}
    </div>
  );
}
