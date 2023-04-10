import Link from "next/link";

export default function UsersLanding() {
  return (
    <>
      <h1>This is the landing page for users</h1>
      <ul>
        <li>
            <Link href="/users/1">User 1</Link>
        </li>
      </ul>
    </>
  );
}
