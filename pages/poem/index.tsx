import type { NextPage } from "next";
import { poems } from "../../lib/poem";
import Head from "next/head";

const PoemPage: NextPage = () => {
  const date = new Date();
  const poem = poems[date.getDate() % poems.length];
  return (
    <>
      <Head>
        <title>{`Thơ của Tài mỗi ngày - (${poem.id}/${poems.length})`}</title>
      </Head>
      <main className="min-h-screen bg-blue-100 dark:bg-gray-900 py-6 flex items-center justify-center">
        <section className="max-w-sm bg-white whitespace-pre-line dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-center">{poem.title}</h2>
          <p className={`${poem.textAlign}`}>{poem.content}</p>
          <p className="text-right">{poem.note}</p>
        </section>
      </main>
    </>
  );
};

export default PoemPage;
