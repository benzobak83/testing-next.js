import { MainLayout } from "layouts/MainLayout";
import Link from "next/link";

export default function Index() {
  return (
    <MainLayout>
      <h1>Hello NExt.JS</h1>
      <Link href="posts">posts</Link>
      <br></br>
      <Link href="about">about</Link>
      <br></br>
      <Link href="post/1">post 1</Link>
    </MainLayout>
  );
}
