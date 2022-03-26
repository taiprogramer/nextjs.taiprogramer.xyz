import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChangeEvent, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(true);
  const [locale, setLocale] = useState(router.locale);

  const changeLocale = (e: ChangeEvent<HTMLSelectElement>) => {
    const href = document.location.href.replace(`/${router.locale}`, "");
    setLocale(e.target.value);
    router.replace(href, href, { locale: e.target.value });
  };

  useEffect(() => {
    // sync locale when the user goes back browser history
    if (router.locale !== locale) {
      const href = document.location.href.replace(`/${router.locale}`, "");
      router.replace(href, href, { locale });
    }
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div
          id="options"
          className="sticky top-0 right-0 font-body z-10 bg-blue-100 text-gray-800 flex justify-between items-center dark:bg-gray-900 dark:text-gray-300 sm:fixed"
        >
          <select
            className="outline-none ml-2 bg-white dark:bg-gray-900 dark:text-gray-300"
            onChange={changeLocale}
            value={locale}
          >
            {router.locales &&
              router.locales.map((l, index) => {
                return (
                  <option key={index} value={l}>
                    {l}
                  </option>
                );
              })}
          </select>
          <button
            className="dark:text-gray-300 right-0 outline-none p-4"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="text-gray-800 bg-blue-100 dark:bg-gray-900 dark:text-gray-300 font-body min-h-screen overflow-x-hidden">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
export default MyApp;
