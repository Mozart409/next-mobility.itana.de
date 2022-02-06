import Head from "next/head";
import Link from "next/link";
import SEO from "@/ui/seo";

function NotFoundPage() {
  return (
    <div>
      <SEO title="404 - Itana GmbH" />
      <Head>
        <link rel="canonical" href="https://mobility.itana.de/404/" />
      </Head>
      <div className="mx-auto prose lg:prose-md">
        <Link passHref href="/">
          <div>
            <h2 className="inline-block p-3 my-8 mt-4 mb-2 text-2xl font-bold bg-yellow-400">
              Diese Seite konnte nicht gefunden werden.
            </h2>

            <button className="p-4 mx-auto text-lg font-bold text-black bg-yellow-400 border-2 border-gray-900 border-solid hover:shadow-xl">
              Startseite
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
