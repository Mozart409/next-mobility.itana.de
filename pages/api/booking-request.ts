import {Buchung} from 'lib/validations';
import {NextApiRequest, NextApiResponse} from 'next';
import {z} from 'zod';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

type BuchungType = z.infer<typeof Buchung>;
const APIBookingRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const parse: BuchungType = Buchung.parse(req.body);

      if (parse.privacy === false) {
        return res.status(400).json({
          error: 'Privacy statement not accepted',
        });
      }

      const content = JSON.stringify(parse);

      const msg = {
        to: process.env.EMAIL_TO,
        from: process.env.EMAIL_FROM,
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
		<p>Auto ${parse.car}</p>
		<p>Mietbeginn ${parse.startDate}</p>
		<p>Mietende ${parse.endDate}</p>
		<h2>Persönliche Angabe</h2>
		<p>Anrede ${parse.anrede}</p>
		<p>Firma ${parse.company}</p>
		<p>Vorname ${parse.firstName}</p>
		<p>Nachname ${parse.lastName}</p>
		<p>Geburtsdatum ${parse.birthday}</p>
		<p>Telefon ${parse.phone}</p>
		<p>E-Mail ${parse.email}</p>
		<h2>Anschrift</h2>
		<p>Straße ${parse.street}</p>
		<p>Stadt ${parse.city}</p>
		<p>PLZ ${parse.zip}</p>
		<p>Land ${parse.country}</p>
		<p>Empfehlung ${parse.recommendation}</p>
		<p>Nachricht ${parse.message}</p>
		
		</div>
		</body>
		</html>`,
      };

      try {
        const sgMessage = await sgMail.send(msg);
        return res.status(202).json(sgMessage);
      } catch (error) {
        return res.status(500).json({error: error});
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({error: error});
    }

    // Process a POST request
  } else {
    // Handle any other HTTP method
    res.status(405).json({error: 'Method not supported'});
  }
};
export default APIBookingRequest;
