import { MainLayout } from "layouts/MainLayout";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Posts({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    console.log(serverPosts);
    async function load() {
      const response = await fetch("http://localhost:4200/posts");
      const json = await response.json();
      setPosts(json);
    }
    if (!serverPosts) {
      load();
    }
  }, []);
  if (!posts) {
    return (
      <MainLayout>
        <h3>Posts is loading...</h3>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <h1>Posts</h1>
      <ul>
        {posts.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/post/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
}

// Posts.getInitialProps = async ({ query, req }) => {
//   if (!req) {
//     return { post: null };
//   }
//   const response = await fetch("http://localhost:4200/posts");
//   const posts = await response.json();

//   return {
//     posts,
//   };
// };

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();

  return {
    props: { posts },
  };
}
