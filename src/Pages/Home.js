import { useRouteLoaderData } from "react-router-dom";
import "../App.css";
import Post from "../Components/Post.js";

export default function Home() {
  const data = useRouteLoaderData("root");
  const { users, posts, comments } = data;

  const userData = {};
  users.forEach((user) => {
    userData[user.id] = [user.name, user.username];
  });

  function findComments(postID) {
    return comments.filter((comment) => comment.postId === postID);
  }

  const userPosts = posts.map((post) => {
    const user = userData[post.userId];
    user.push(post.userId);
    const comment = findComments(post.id);
    return <Post key={post.id} post={post} user={user} comments={comment} />;
  });

  return (
    <div className="posts">
      <div className="post-heading">Posts</div>
      {userPosts}
    </div>
  );
}
