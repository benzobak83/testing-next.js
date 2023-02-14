import { MainLayout } from "layouts/MainLayout";
import Link from "next/link";
import Router from "next/router";

export default function About() {
  const handleClick = () => {
    Router.push("/");
  };
  return (
    <MainLayout>
      <h1>About</h1>
      <Link href="/">go back</Link>
      <button onClick={handleClick}>go back to home with btn</button>
    </MainLayout>
  );
}
