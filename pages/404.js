import Head from 'next/head';
import Link from 'next/link';
import SEO from '@/ui/seo';

function NotFoundPage() {
	return (
		<div>
			<SEO title="404 - Itana GmbH" />
			<Head>
				<link rel="canonical" href="https://mobility.itana.de/404/" />
			</Head>
			<div className="lg:prose-md prose mx-auto">
				<Link passHref href="/">
					<div>
						<h2 className="my-8 mt-4 mb-2 inline-block bg-yellow-400 p-3 text-2xl font-bold">
							Diese Seite konnte nicht gefunden werden.
						</h2>

						<button className="mx-auto border-2 border-solid border-gray-900 bg-yellow-400 p-4 text-lg font-bold text-black hover:shadow-xl">
							Startseite
						</button>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default NotFoundPage;
