import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>
      <ul>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </>
  )
}
