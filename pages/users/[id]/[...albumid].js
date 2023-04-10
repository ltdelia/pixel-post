import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PostPage() {
  const router = useRouter();
  const { albumid } = router.query;

  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    if (albumid && albumid.length) {
      fetch("https://jsonplaceholder.typicode.com/albums/" + albumid[albumid.length - 1] +"/photos")
        .then((response) => response.json())
        .then((data) => {
          setPhotos(data);
        });
    }
  }, [albumid]);

  return (
    <>
      <h1>This is the photos page!</h1>
      {photos && (
        <div>
          <ul>
            {photos.map((photo) => (
              <li key={photo.id}>
                <h2>{photo.title}</h2>
                <img src={photo.thumbnailUrl} />
                <a href={photo.url} target="_blank">
                  See Photo
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!albumid && (
        <div>
          <h2>There are currently no photos available.</h2>
        </div>
      )}
    </>
  );
}
