import sgMail from '@sendgrid/mail';
import {NextApiRequest, NextApiResponse} from 'next';
import * as z from 'zod';
import {ZodIssue} from 'zod';

import {config} from '@/lib/config';
import {ZodBuchung} from '@/lib/validations';

const myError = new z.ZodError([]);
sgMail.setApiKey(config.demoSGKey);

type ResponseData = {
  message: string;
  code: number;
  success: boolean;
  error?: any;
};

class ZodError extends Error {
  issues: ZodIssue[];
}

type BuchungType = z.infer<typeof ZodBuchung>;

async function myApiHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    try {
      const safeBody: BuchungType = ZodBuchung.parse(req.body);
      const content = JSON.stringify(safeBody);
      const msg = {
        to: config.emailTo,
        from: config.emailFrom,
        subject: 'Buchungsanfrage von mobility.itana.de',
        text: `${content}`,
        html: `
  <html>
  <head>
  <link rel="stylesheet" href="https://unpkg.com/simpledotcss/simple.min.css">
  </head>
  <body>
  
  <div>
  
  <h1>Buchungsanfrage</h1>
  <h2>Vermietung</h2>
  <p>Auto ${safeBody.car}</p>
  <p>Mietbeginn ${safeBody.startDate}</p>
  <p>Mietende ${safeBody.endDate}</p>
  <h2>Persönliche Angabe</h2>
  <p>Anrede ${safeBody.anrede}</p>
  <p>Firma ${safeBody.company}</p>
  <p>Vorname ${safeBody.firstName}</p>
  <p>Nachname ${safeBody.lastName}</p>
  <p>Geburtsdatum ${safeBody.birthday}</p>
  <p>Telefon ${safeBody.phone}</p>
  <p>E-Mail ${safeBody.email}</p>
  <h2>Anschrift</h2>
  <p>Straße ${safeBody.street}</p>
  <p>Stadt ${safeBody.city}</p>
  <p>PLZ ${safeBody.zip}</p>
  <p>Land ${safeBody.country}</p>
  <p>Empfehlung ${safeBody.recommendation}</p>
  <p>Nachricht ${safeBody.message}</p>
  
  </div>
  </body>
  </html>`,
      };
      try {
        const sgMessage = await sgMail.send(msg);
        res.status(sgMessage[0].statusCode).json({
          message: 'Anfrage wurde verschickt',
          code: sgMessage[0].statusCode,
          success: true,
        });
      } catch (error) {
        const {code, message} = error;
        return res.status(code).json({message, code, success: false, error});
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log(error.issues);
        return res.status(400).send({
          message: `Yo, bad payload!`,
          code: 400,
          success: false,
          error: error.issues,
        });
      }
    }

    // const data = await getDataFromDb();
  } else {
    res
      .status(402)
      .json({message: 'Method not allowed', code: 402, success: false});
  }
}

export default myApiHandler;
