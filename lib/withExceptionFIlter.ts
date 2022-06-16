import {NextApiRequest, NextApiResponse, NextApiHandler} from 'next';
import {ApiError} from 'next/dist/server/api-utils';

export function withExceptionFilter(req: NextApiRequest, res: NextApiResponse) {
  return async function (handler: NextApiHandler) {
    function getExceptionStatus(exception: unknown) {
      return exception instanceof ApiError ? exception.statusCode : 500;
      // : HttpStatusCode.InternalServerError;
    }

    function getExceptionMessage(exception: unknown) {
      return isError(exception) ? exception.message : `Internal Server Error`;
    }

    function getExceptionStack(exception: unknown) {
      return isError(exception) ? exception.stack : undefined;
    }

    function isError(exception: unknown): exception is Error {
      return exception instanceof Error;
    }

    return handler(req, res);
  };
}
