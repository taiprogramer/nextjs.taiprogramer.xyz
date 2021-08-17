import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import Card from "../components/card";
import Image from "next/image";

const pageTitle = "taiprogramer's homepage";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageTitle} />
        <link
          rel="shortcut icon"
          href="https://www.gravatar.com/avatar/5d1c5de71d27a3a3e55f28808ad2ff5a"
          type="image/x-icon"
        />
      </Head>
      <h1 className="p-3 text-center mb-0">{pageTitle}</h1>
      <p className="text-center">Technology: NextJS, Tailwindcss, Cirrus-ui</p>
      <main className="p-3 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        <Card title="Intro">
          <p>
            Hello someone on the internet. When you goto this website, I assume that you want to
            know more about me and my lifestyle. Ok, I will tell you. I am just a person like you,
            simple enough. I want to learn and share my knowledge with the world. I have no
            girlfriend.
          </p>
        </Card>
        <Card title="Love">
          <p>
            I love helping people to complete their stuff. I love seeing the smile of people. I love
            GNU/Linux and everything related to it. I love simple things. I love solving problems
            and coding. I love freedom, free software (Free as in Freedom), privacy.
          </p>
        </Card>
        <Card title="System">
          <p>
            We all have reasons to do something. Because I am a simple man, so I use Artix (Arch
            Linux without systemd).
          </p>
          <ul>
            <li>My window manager is dwm.</li>
            <li>My terminal is alacritty.</li>
            <li>My browser is brave.</li>
            <li>My text editor is neovim.</li>
          </ul>
        </Card>
        <Card title="Hate">Right now and for no reason, I only hate communism.</Card>
        <Card title="Get in touch">
          <ul>
            <li>Email: taiprogramer@protonmail.com</li>
            <li>
              PGP Key:
              <a href="/3B724AB7854978609F86E1CC86F68AA27FB152F2.asc">0x3B724AB7854978</a>
            </li>
            <li>
              Telegram:
              <a rel="noopener noreferrer" href="https://t.me/taiprogramer" target="_blank">
                t.me/taiprogramer
              </a>
            </li>
            <li className="line-through">Facebook</li>
            <li className="line-through">Twitter</li>
            <li className="line-through">Zalo</li>
          </ul>
        </Card>
        <Card title="Donation">
          <ul>
            <li>Sacombank: 070113473868</li>
            <li>Monero:</li>
            <Image alt="monero wallet" src="/images/monero.png" width={200} height={200} />
          </ul>
        </Card>
      </main>
    </Layout>
  );
};

export default Home;
