import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/card";
import Image from "next/image";
import Link from "next/link";
import type { HomeTranslation } from "../i18n/index";

const avatarUrl = "https://www.gravatar.com/avatar/5d1c5de71d27a3a3e55f28808ad2ff5a";

type Props = {
  t: HomeTranslation;
};

const Home: NextPage<Props> = (props) => {
  const { t } = props;
  return (
    <>
      <Head>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageTitle} />
        <link rel="shortcut icon" href={avatarUrl} type="image/x-icon" />
      </Head>
      <h1 className="p-4 text-center mb-0 sm:p-6">{t.pageTitle}</h1>
      <header className="flex flex-col items-center">
        <Image
          alt="profile image"
          src={`${avatarUrl}?s=300`}
          height={200}
          width={200}
          className="rounded-full"
        />
        <p className="mt-6 text-xl">{t.slogan}</p>
        <p>{t.motto}</p>
      </header>
      <main className="p-4 grid grid-cols-1 gap-6 sm:p-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card title={t.introTitle}>
          <p>{t.introText}</p>
        </Card>
        <Card title={t.linkTitle}>
          <ul>
            <li>
              <Link href="/htql">Ctu - Htql - Login</Link>
            </li>
            <li>
              <Link href="/poem">Poem - Thơ ca</Link>
            </li>
          </ul>
        </Card>
        <Card title={t.loveTitle}>
          <p>{t.loveText}</p>
        </Card>
        <Card title={t.systemTitle}>
          <p>{t.systemText}</p>
          <ul>
            <li>{t.systemWM}</li>
            <li>{t.systemTerminal}</li>
            <li>{t.systemBrowser}</li>
            <li>{t.systemTextEditor}</li>
          </ul>
        </Card>
        <Card title={t.contactTitle}>
          <ul className="list-disc">
            <li>
              {t.emailTitle}: taiprogramer [{t.at}] protonmail [{t.dot}] com
            </li>
            <li>
              {t.pgpTitle}:
              <a href="/3B724AB7854978609F86E1CC86F68AA27FB152F2.asc"> 0x3B724AB7854978</a>
            </li>
            <li>
              Session ({t.recommended}):
              <p className="overflow-x-scroll">
                05c65a6dfab283225e93a5606c169c1c77d89e9bd198421a55c470b50f33836e0d
              </p>
            </li>
            <li className="line-through">
              Telegram:{" "}
              <a rel="noopener noreferrer" href="https://t.me/taiprogramer" target="_blank">
                t.me/taiprogramer
              </a>{" "}
              (will be removed after November 05 2021)
            </li>
            <li className="line-through">Facebook</li>
            <li className="line-through">Twitter</li>
            <li className="line-through">Zalo</li>
          </ul>
        </Card>
        <Card title={t.donation}>
          <ul>
            <li>Sacombank: 070113473868</li>
            <li>Monero:</li>
            <Image alt="monero wallet" src="/images/monero.png" width={200} height={200} />
          </ul>
        </Card>
        <Card title={t.hate}>{t.hateText}</Card>
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps({
  locale,
  defaultLocale,
}: {
  locale: string;
  defaultLocale: string;
}) {
  const lang = locale.split("-")[0];
  const defaultLang = defaultLocale.split("-")[0];
  const defaultT = (await import(`../i18n/${defaultLang}/Home.ts`)).default;
  const t = (await import(`../i18n/${lang}/Home.ts`)).default;
  return {
    props: {
      t: {
        ...defaultT,
        ...t,
      },
    },
  };
}
