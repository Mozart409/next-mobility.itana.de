import cx from 'classnames'
const CTA = (props) => (
  <div data-cy={props.data_cy}>
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="anfrage"
    >
      <button
        className={cx(
          'static z-50 w-full py-2 mt-2 font-semibold uppercase rounded-full transition duration-150 ease-in-out',
          {
            'bg-itana-red text-white hover:bg-red-900': props.fillBG,
            'border border-itana-red text-black hover:bg-red-500 hover:text-white focus:outline-none focus:shadow-outline':
              !props.fillBG,
            'w-full': props.fullWidth,
            'max-w-xs': !props.fullWidth
          }
        )}
      >
        {props.title}
      </button>
    </a>
  </div>
)
CTA.defaultProps = {
  link: 'https://itana.rentware.io/',
  title: 'Buchung jetzt anfragen',
  data_cy: 'Call to Action Button'
}
export default CTA
