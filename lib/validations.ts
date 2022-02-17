import * as z from 'zod';

export const Buchung = z.object({
  car: z.enum([
    'Model 3 SR+',
    'Model 3 Performance',
    'Model X',
    'Model 3 Long Range',
  ]),
  startDate: z.string(),
  endDate: z.string(),

  anrede: z.enum(['Herr', 'Frau']).optional(),
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

  recomenndation: z.enum([
    'Social Media',
    'Google',
    'Empfehlung',
    'Anderweitig',
  ]),

  message: z.string(),

  privacy: z.boolean(),
});
