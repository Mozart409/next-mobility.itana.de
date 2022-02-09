import cx from 'classnames';
import React from 'react';

interface IProps {
  link: string;
  title: string;
  fillBG: boolean;
  fullWidth: boolean;
  data_cy?: string;
}
const CTA: React.FC<IProps> = props => (
	<div data-cy={props.data_cy}>
		<a
			href={props.link || 'https://itana.rentware.io/'}
			target="_blank"
			rel="noopener noreferrer"
			className="anfrage"
		>
			<button
				className={cx(
					'static z-50 mt-2 w-full rounded-full py-2 font-semibold uppercase transition duration-150 ease-in-out',
					{
						'bg-itana-red text-white hover:bg-red-900': props.fillBG,
						'focus:shadow-outline border border-itana-red text-black hover:bg-red-500 hover:text-white focus:outline-none':
              !props.fillBG,
						'w-full': props.fullWidth,
						'max-w-xs': !props.fullWidth,
					},
				)}
			>
				{props.title || 'Buchung jetzt anfragen'}
			</button>
		</a>
	</div>
);

export default CTA;
