import { MainLayout } from "layouts/MainLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Post({ post: serverPost }) {
  const [post, setPost] = useState(serverPost);
  const { query } = useRouter();

  useEffect(() => {
    console.log(serverPost);
    async function load() {
      const response = await fetch(`http://localhost:4200/posts/${query.id}`);
      const data = await response.json();
      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Post is loading...</p>
      </MainLayout>
    );
  }
  return (
    <MainLayout title={"post"}>
      <h1>{post.title}</h1>
      <h2>{post.body}</h2>
      <Link href={"/posts"}>go back</Link>
    </MainLayout>
  );
}

Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return {
      post: null,
    };
  }
  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();

  return {
    post,
  };
};
