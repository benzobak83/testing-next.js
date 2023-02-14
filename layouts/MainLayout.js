import Head from "next/head";
import Link from "next/link";

export function MainLayout({ children, title = "Next App" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Link href="/">go home</Link>
        <Link href="/posts">go posts</Link>
        <Link href="/post/1">go post-1</Link>
        <Link href="/about">go about</Link>
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: space-around;
          }
        `}
      </style>
    </>
  );
}
