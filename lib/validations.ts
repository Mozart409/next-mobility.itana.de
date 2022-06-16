import * as z from 'zod';

export const ZodBuchung = z.object({
  car: z.enum([
    'Tesla Model 3 SR+',
    'Tesla Model 3 Performance',
    'Tesla Model Y Performance',
    'Tesla Model X Long Range',
    'Tesla Model 3 Long Range',
    'Tesla Model Y Long Range',
    'Dacia Spring Electric',
  ]),
  startDate: z.string(),
  endDate: z.string(),

  anrede: z.enum(['Herr', 'Frau']),
  company: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  birthday: z.string(),
  phone: z.string(),
  email: z.string().email(),

  street: z.string(),
  city: z.string(),
  zip: z.string(),
  country: z.string(),

  recommendation: z
    .enum(['Social Media', 'Google', 'Empfehlung', 'Bitte wählen'])
    .optional(),

  message: z.string().optional(),

  privacy: z.literal(true, {
    required_error: 'Datenschutz muss akzeptiert werden',
  }),
});

/* {
	"country": "Deutschland",
	"car": "Tesla Model 3 SR+",
	"recommendation": "Bitte wählen",
	"anrede": "Frau",
	"startDate": "2022-06-17",
	"endDate": "2022-06-24",
	"firstName": "Isabell",
	"lastName": "Mader",
	"birthday": "1969-12-18",
	"phone": "0178684548",
	"email": "test@test.com",
	"street": "Müllerweg 1",
	"city": "Stuttgart",
	"zip": "80789",
	"privacy": true
} */
