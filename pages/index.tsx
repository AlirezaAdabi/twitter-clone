import axios from "axios";
// import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "../components/Login";

interface Props {
  trendingResults: Object;
  followResults: Object;
  providers: Object;
}

const Home = ({ trendingResults, followResults, providers }: Props) => {
  const { data: session } = useSession();
  if (!session) return <Login providers={providers} />;
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/twitter.png" />
      </Head>
      <main className="mx-auto flex min-h-screen max-w-[1500px] bg-black">
        <Sidebar />
        <Feed />
        {/* Widgets */}
        {/* Modal */}
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async (context: any) => {
  const { data: trendingResults } = await axios(
    "https://jsonkeeper.com/b/NKEV"
  );
  const { data: followResults } = await axios("https://jsonkeeper.com/b/WWMJ");
  const providers = await getProviders();
  // const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      // session,
    },
  };
};
