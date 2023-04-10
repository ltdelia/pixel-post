import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UserPage() {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState(null);

  // data fetch here via JSON Placeholder for the relevant user -- router.query.id
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, [id]);

  return (
    <>
      <h1>This is the page for the user.</h1>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <h2>{user.username}</h2>
          <h2>{user.email}</h2>
          <h2>{user.phone}</h2>
          <h2>{user.website}</h2>
        </div>
      )}
      {!id && (
        <div>
          <h2>There is currently no user available.</h2>
        </div>
      )}
    </>
  );
}
