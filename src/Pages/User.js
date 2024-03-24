import "../Components/Post.css";
import { Link, useRouteLoaderData } from "react-router-dom";

export default function User() {
  const { users } = useRouteLoaderData("root");

  const usersInfo = users.map((user) => {
    return (
      <Link
        key={user.id}
        to={`/users/${user.id}`}
        style={{ textDecoration: "none" }}
      >
        <div className="username-block">
          <p className="user">{user.name}</p>
          <p className="username">@{user.username}</p>
        </div>
      </Link>
    );
  });
  
  return (
    <div className="posts">
      <div className="post-heading">Users</div>
      {usersInfo}
    </div>
  );
}
