import {ZodBuchung} from 'lib/validations';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import {Field} from 'react-final-form';
import toast from 'react-hot-toast';

import {Form} from './ui/Form';
import LabeledSelectField from './ui/LabeledSelectField';
import {LabeledTextField} from './ui/LabeledTextField';

const FormBookingRequest = () => {
  const router = useRouter();

  let startDate = new Date();
  startDate.setDate(startDate.getDate() + 3);

  let endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);

  const [startDateValue, setStartDateValue] = useState<Date>(startDate);

  const [endDateValue, setEndDateValue] = useState<Date>(endDate);

  /* const onSetStartDateValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setStartDateValue(new Date(event.target.value));
  }; */
  return (
    <div>
      <Form
        submitText="Anfrage Abschicken"
        schema={ZodBuchung}
        initialValues={{
          country: 'Deutschland',
          car: 'Tesla Model 3',
          recommendation: 'Bitte wählen',
          anrede: 'Frau',
          startDate: startDateValue.toLocaleDateString('en-CA'),
          endDate: endDateValue.toLocaleDateString('en-CA'),
        }}
        pageTitle="Buchungsanfrage"
        onSubmit={async (values, event) => {
          console.log(values);
          const body = JSON.stringify(values);
          /* 
          const parse = Buchung.parse(body);

          if (parse.privacy === false) {
            return new Error(
              'Bitte akzeptieren Sie die Datenschutzbestimmungen'
            );
          } */
          try {
            const response = await fetch('/api/booking-request/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: body,
            });
            //console.log(response);
            if (response.status >= 200 && response.status < 300) {
              window.dataLayer.push({event: 'form-sent'});
              toast.success(
                'Vielen Dank für Ihre Anfrage. Wir werden uns so schnell wie möglich bei Ihnen melden.',
                {
                  duration: 5000,
                }
              );

              router.push('/erfolg');
            } else {
              window.dataLayer.push({event: 'form-error'});
              toast.error(
                'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.',
                {
                  duration: 5000,
                }
              );
            }
          } catch (error) {
            toast.error(
              'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.',
              {
                duration: 5000,
              }
            );
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
              <option>Tesla Model 3 </option>
              <option>Tesla Model 3 Performance</option>
              <option>Tesla Model 3 Long Range</option>
              <option>Tesla Model Y Performance</option>
              <option>Tesla Model Y Long Range</option>
              <option>Tesla Model X Long Range</option>
              <option>Dacia Spring Electric</option>
            </LabeledSelectField>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LabeledTextField
                type="date"
                name="startDate"
                label="Abholdatum"
                /* value={startDateValue.toLocaleDateString('en-CA')}
                onChange={onSetStartDateValue} */
              />
              <LabeledTextField
                type="date"
                name="endDate"
                label="Rückgabedatum"
              />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-7 text-gray-900">
              Persönliche Angaben
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LabeledSelectField name={'anrede'} label={'Anrede'}>
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
                placeholder="Vorname"
              />
              <LabeledTextField
                type="text"
                name="lastName"
                label="Nachname"
                placeholder="Nachname"
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
              <LabeledTextField type="text" name="zip" label="Postleitzahl" />
            </div>
            <LabeledTextField type="text" name="country" label="Land" />
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
                className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:ring-itana-red focus:border-itana-red"
              />
            </div>
            <div className="relative flex items-start">
              <div className="flex items-center h-5">
                <Field
                  component="input"
                  required
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
                  <a
                    href="https://itana.de/datenschutz/"
                    className="text-itana-red font-semibold"
                  >
                    Datenschutzerklärung *
                  </a>
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
