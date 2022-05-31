import React from 'react';

import {LabeledTextField} from './ui/LabeledTextField';
import {Form} from './ui/Form';
import {Buchung} from 'lib/validations';
import Link from 'next/link';
import {Field} from 'react-final-form';
import LabeledSelectField from './ui/LabeledSelectField';
import toast from 'react-hot-toast';
type Props = {};

const FormBookingRequest = (props: Props) => {
  return (
    <div>
      <Form
        submitText="Anfrage Abschicken"
        schema={Buchung}
        initialValues={{
          country: 'Deutschland',
          car: 'Model 3 SR+',
          recommendation: 'Bitte wählen',
          anrede: 'Bitte wählen',
        }}
        pageTitle="Buchungsanfrage"
        onSubmit={async values => {
          console.log(values);
          try {
            const response = await fetch('/api/booking-request/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });
            if (response.status === 200) {
              toast.success(
                'Vielen Dank für Ihre Anfrage. Wir werden uns so schnell wie möglich bei Ihnen melden.',
                {
                  duration: 5000,
                }
              );
            }
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold leading-7 text-gray-900 ">
              Mietvorgang
            </h2>
            <LabeledSelectField name={'car'} label={'Fahrzeug'}>
              <option>Dacia Spring Electric</option>
              <option>Tesla Model 3</option>
              <option>Tesla Model 3 Long Range</option>
              <option>Tesla Model 3 Performance</option>
              <option>Tesla Model X</option>
            </LabeledSelectField>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LabeledTextField
                type="date"
                name="startDate"
                label="Abholdatum"
                placeholder=""
              />
              <LabeledTextField
                type="date"
                name="endDate"
                label="Rückgabedatum"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-7 text-gray-900 ">
              Persönliche Angaben
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LabeledSelectField name={'anrede'} label={'Anrede'}>
                <option>Bitte wählen</option>
                <option>Herr</option>
                <option>Frau</option>
              </LabeledSelectField>

              <LabeledTextField
                type="text"
                name="company"
                label="Firma"
                placeholder="Firma"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LabeledTextField
                type="text"
                name="firstName"
                label="Vorname"
                placeholder="Markus"
              />
              <LabeledTextField
                type="text"
                name="lastName"
                label="Nachname"
                placeholder="Müller"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LabeledTextField
                type="date"
                name="birthday"
                label="Geburtsdatum"
                placeholder=""
              />

              <LabeledTextField
                type="tel"
                name="phone"
                label="Telefonnummer"
                placeholder="+49 (0) 123456789"
              />
            </div>
            <LabeledTextField
              type="email"
              name="email"
              label="E-Mail"
              placeholder=""
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-7 text-gray-900 ">
              Addresse
            </h2>

            <LabeledTextField
              type="text"
              name="street"
              label="Straße"
              placeholder="Müllerweg 1"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LabeledTextField
                type="text"
                name="city"
                label="Stadt"
                placeholder="Stuttgart"
              />
              <LabeledTextField
                type="number"
                name="zip"
                label="Postleitzahl"
                placeholder="70173"
              />
            </div>
            <LabeledTextField
              type="text"
              name="country"
              label="Land"
              placeholder="Deutschland"
            />
          </div>
          <div className="space-y-4">
            <div>
              <LabeledSelectField
                name={'recommendation'}
                label={'Wie haben Sie von uns gehört?'}
              >
                <option>Bitte wählen</option>
                <option>Social Media</option>
                <option>Google</option>
                <option>Empfehlung</option>
              </LabeledSelectField>
            </div>
            <div className="relative mt-1 rounded-md shadow-sm">
              <label className="block text-sm font-medium text-gray-700">
                Nachricht
              </label>
              <Field
                name={'message'}
                component="textarea"
                rows={8}
                className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="relative flex items-start">
              <div className="flex items-center h-5">
                <Field
                  component="input"
                  id="privacy"
                  aria-describedby="privacy-description"
                  name="privacy"
                  type="checkbox"
                  className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="privacy" className="font-medium text-gray-700">
                  Datenschutz
                </label>
                <p id="privacy-description" className="text-gray-500">
                  Detaillierte Informationen zum Umgang mit Nutzerdaten findest
                  Du in unserer{' '}
                  <Link href="/datenschutz">
                    <a className="text-itana-red font-semibold">
                      Datenschutzerklärung *
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default FormBookingRequest;
