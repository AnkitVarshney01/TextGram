import "../Components/Post.css";
import { Link, useRouteLoaderData } from "react-router-dom";
import { Link as MatLink } from "@mui/material";
export default function User() {
  const { users } = useRouteLoaderData("root");

  const usersInfo = users.map((user) => {
    return (
      <MatLink
        component={Link}
        key={user.id}
        to={`/users/${user.id}`}
        underline="hover"
      >
        <div className="username-block">
          <p className="user">{user.name}</p>
          <p className="username">@{user.username}</p>
        </div>
      </MatLink>
    );
  });

  return (
    <div className="posts">
      <div className="post-heading">Users</div>
      {usersInfo}
    </div>
  );
}
