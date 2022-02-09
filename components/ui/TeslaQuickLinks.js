import Link from 'next/link';

export default function TeslaQuickLinks() {
	return (
		<div className="mt-4" data-cy="QuickLinks">
			<h2 className="mb-2 text-3xl">Mieten - Rückgabe - Reichweite </h2>
			<div className="mx-auto grid max-w-lg gap-y-1 gap-x-2 md:max-w-none md:grid-cols-3">
				<Link
					href="/#tesla-mieten"
					target="_blank"
					className="font-semibold text-itana-red"
					rel="noopener noreferrer"
				>
					<a>E-Auto mieten und abholen</a>
				</Link>

				<Link
					href="/#tesla-zurueckgeben"
					target="_blank"
					className="font-semibold text-itana-red"
					rel="noopener noreferrer"
				>
					<a>E-Auto zurückzugeben</a>
				</Link>

				<Link
					href="/#tesla-aufladen"
					target="_blank"
					className="font-semibold text-itana-red"
					rel="noopener noreferrer"
				>
					<a>E-Auto laden und Reichweite</a>
				</Link>

				<Link
					href="/#beachten-beim-tesla-mieten"
					target="_blank"
					className="font-semibold text-itana-red"
					rel="noopener noreferrer"
				>
					<a>Was muss ich beachten ?</a>
				</Link>

				<Link
					href="/#versicherung"
					target="_blank"
					className="font-semibold text-itana-red"
					rel="noopener noreferrer"
				>
					<a>Versicherung</a>
				</Link>
			</div>
		</div>
	);
}
