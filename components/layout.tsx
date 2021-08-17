import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <div className="dark:bg-black dark:text-gray-300">{children}</div>
    </>
  );
}
