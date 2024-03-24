import { Outlet } from "react-router-dom";
import LeftPane from "../Components/LeftPane.js";
import "../App.css";
export default function RootLayout() {
  return (
    <div className="text-gram">
      <LeftPane />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export async function loader() {
  const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await userRes.json();

  const postRes = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await postRes.json();

  const commentRes = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const comments = await commentRes.json();
  if (!userRes.ok || !postRes.ok || !commentRes.ok) {
    return;
  }
  return { users, posts, comments };
}
