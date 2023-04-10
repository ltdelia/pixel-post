import Link from "next/link";
import { useEffect, useState } from "react";

export default function UsersLanding() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  });

  return (
    <>
      <h1>This is the landing page for users</h1>
      <ul>
        {users && users.map((user) => (
          <li key={user.id}>
            <Link href={'/users/' + user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
