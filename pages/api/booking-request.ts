import {Buchung} from 'lib/validations';
import {NextApiRequest, NextApiResponse} from 'next';
import {z} from 'zod';
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
type BookingRequestData = {};
type BuchungType = z.infer<typeof Buchung>;
const APIBookingRequest = async (
  req: NextApiRequest,
  res: NextApiResponse<BookingRequestData>
) => {
  if (req.method === 'POST') {
    try {
      const parse: BuchungType = await Buchung.parse(req.body);

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
		<link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
		</head>
		<body>
		
		<div>
		
		<h1>Buchungsanfrage</h1>
		<h2>Vermietung</h2>
		<p>Auto ${parse.car}</p><br />
		<p>Mietbeginn ${parse.startDate}</p><br />
		<p>Mietende ${parse.endDate}</p><br />
		<h2>Persönliche Angabe</h2>
		<p>Anrede ${parse.anrede}</p><br />
		<p>Firma ${parse.company}</p><br />
		<p>Vorname ${parse.firstName}</p><br />
		<p>Nachname ${parse.lastName}</p><br />
		<p>Geburtsdatum ${parse.birthday}</p><br />
		<p>Telefon ${parse.phone}</p><br />
		<p>E-Mail ${parse.email}</p><br />
		<h2>Anschrift</h2>
		<p>Straße ${parse.street}</p><br />
		<p>Stadt ${parse.city}</p><br />
		<p>PLZ ${parse.zip}</p><br />
		<p>Land ${parse.country}</p><br />
		<p>Empfehlung ${parse.recommendation}</p><br />
		<p>Nachricht ${parse.message}</p><br />
		
		</div>
		</body>
		</html>`,
      };

      try {
        const email = await sgMail.send(msg);
        return res.status(200).json({method: req.method, email});
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
    res.status(500).json({error: 'Method not supported'});
  }
};
export default APIBookingRequest;
