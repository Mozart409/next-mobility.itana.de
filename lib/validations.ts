import * as z from 'zod';

export const Buchung = z.object({
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

  anrede: z.enum(['Bitte wählen', 'Herr', 'Frau']),
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

  recommendation: z.enum([
    'Social Media',
    'Google',
    'Empfehlung',
    'Bitte wählen',
  ]),

  message: z.string().optional(),

  privacy: z.boolean({
    required_error: 'Datenschutz muss akzeptiert werden',
  }),
});
