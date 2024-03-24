import { useParams, useRouteLoaderData } from "react-router-dom";
import "../App.css";
import "./UserDetails.css";

export default function UserDetails() {
  const { users } = useRouteLoaderData("root");
  let { userId } = useParams();

  const user = users.filter((user) => {
    return String(user.id) === userId;
  })[0];

  console.log(userId);

  return (
    <div className="posts">
      <h1 className="user-heading">{user.name}</h1>
      <h5 className="user-name">@{user.username}</h5>
      E-Mail: {user.email}
      <br />
      Phone: {user.phone}
      <br />
      Website: {user.email}
      <br />
      <hr />
      <h3>Company</h3>
      <h7>Name: {user.company.name}</h7>
      <br />({user.company.catchPhrase})
      <br />
      <iframe
        id="iframeid"
        title="userLocation"
        src={`https://maps.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}&hl=es;&output=embed`}
      ></iframe>
    </div>
  );
}
