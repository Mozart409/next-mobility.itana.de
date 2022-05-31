import * as z from 'zod';

export const Buchung = z.object({
  car: z.enum([
    'Model 3 SR+',
    'Model 3 Performance',
    'Model Y Performance',
    'Model X Long Range',
    'Model 3 Long Range',
    'Model Y Long Range',
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
  zip: z.number(),
  country: z.string(),

  recommendation: z.enum([
    'Social Media',
    'Google',
    'Empfehlung',
    'Bitte wählen',
  ]),

  message: z.string(),

  privacy: z.boolean(),
});
