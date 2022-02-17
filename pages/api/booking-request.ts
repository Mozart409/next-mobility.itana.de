import {NextApiRequest, NextApiResponse} from 'next';

type BookingRequestData = {};

const APIBookingRequest = (
	req: NextApiRequest,
	res: NextApiResponse<BookingRequestData>
) => {
	res.status(200).json({});
};
export default APIBookingRequest;
