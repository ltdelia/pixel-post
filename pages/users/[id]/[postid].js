import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PostPage() {
  const router = useRouter();
  const { postid } = router.query;

  //   const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + postid + "/comments")
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  }, [postid]);

  return (
    <>
      <h1>This is the post page for the post {postid}.</h1>
      {comments && (
        <div>
          <ul>
            {comments.map((comment) => (
              <li>
                <h2>{comment.name}</h2>
                <h3>From: {comment.email}</h3>
                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!postid && (
        <div>
          <h2>There is currently no post available.</h2>
        </div>
      )}
    </>
  );
}
