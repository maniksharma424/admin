import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        id="container"
        className="h-screen w-full flex flex-col justify-center items-center"
      >
        <h1 className="text-[50px]">Link page</h1>
        <div
          id="Links"
          className="w-1/2 h-1/2 flex flex-col justify-around items-center border-[1px] rounded-lg shadow-lg"
        >
          <Link
            className="px-4 py-2 border-[1px] border-black rounded-lg shadow-md"
            href={"/login"}
          >
            Login
          </Link>
          <Link
            className="px-4 py-2 border-[1px] border-black rounded-lg shadow-md"
            href={"/dashboard"}
          >
            Dashboard
          </Link>
          <Link
            className="px-4 py-2 border-[1px] border-black rounded-lg shadow-md"
            href={"/forgotPassword"}
          >
            Forgot Password
          </Link>
          <Link
            className="px-4 py-2 border-[1px] border-black rounded-lg shadow-md"
            href={"/profile"}
          >
            Profile Page
          </Link>
        </div>
      </div>
    </>
  );
}
