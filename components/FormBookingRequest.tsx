import React from 'react';

import {LabeledTextField} from './ui/LabeledTextField';
import {Form, FORM_ERROR} from './ui/Form';
import {Buchung} from 'lib/validations';
import Link from 'next/link';
import {Field} from 'react-final-form';
import LabeledSelectField from './ui/LabeledSelectField';
type Props = {};

const FormBookingRequest2 = (props: Props) => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.anrede) {
      errors.anrede = 'Anrede ist ein Pflichtfeld';
    }

    if (!values.vorname) {
      errors.vorname = 'Required';
    }
    if (!values.nachname) {
      errors.nachname = 'Required';
    }
  };

  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Profile
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          {/* <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({handleSubmit}) => (
              <form onSubmit={handleSubmit}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label>Anrede</label>
                        <Field name="anrede" component="select" placeholder="">
                          <option value="">Bitte auswählen</option>
                          <option value="Frau">Frau</option>
                          <option value="Herr">Herr</option>
                        </Field>
                      </div>
                      <div>
                        <label>Firma</label>
                        <Field name="firma" component="input" placeholder="" />
                      </div>
                      <FormField
                        component="input"
                        meta={meta}
                        label={'Firma'}
                        placeholder={''}
                      />
                      <div>
                        <label>Vorname</label>
                        <Field
                          name="vorname"
                          component="input"
                          placeholder="Markus"
                        />
                      </div>
                      <div>
                        <label>Nachname</label>
                        <Field
                          name="nachname"
                          component="input"
                          placeholder="Müller"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit">Submit</button>
              </form>
            )}
          /> */}
        </div>
      </div>
    </div>
  );
};

const FormBookingRequest = (props: Props) => {
  return (
    <div>
      <Form
        submitText="Anfrage Abschicken"
        schema={Buchung}
        initialValues={{country: 'Deutschland', car: 'Model 3 SR+'}}
        pageTitle="Buchungsanfrage"
        onSubmit={async values => {
          try {
            console.log(values);
          } catch (e) {
            console.log(e);
          }
          /* try {
            await loginMutation(values);
            plausible('loginSuccess');
            props.onSuccess?.();
          } catch (error) {
            if (error instanceof AuthenticationError) {
              plausible('loginWrongCreds');
              return {[FORM_ERROR]: 'Sorry, those credentials are invalid'};
            } else {
              plausible('loginFormError');
              return {
                [FORM_ERROR]:
                  'Sorry, we had an unexpected error. Please try again. - ' +
                  error.toString(),
              };
            }
          } */
        }}
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold leading-7 text-gray-900 ">
              Mietvorgang
            </h2>
            <LabeledSelectField name={'car'} label={'Fahrzeug'}>
              <option>Model 3 SR+</option>
              <option>Model 3 Performance</option>
              <option>Model X</option>
              <option>Model 3 Long Range</option>
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

            <LabeledTextField
              type="text"
              name="company"
              label="Firma"
              placeholder="Firma"
            />
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
                type="text"
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
                <input
                  id="privacy"
                  aria-describedby="privacy-description"
                  name="privacy"
                  type="checkbox"
                  required
                  aria-required="true"
                  className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="privacy" className="font-medium text-gray-700">
                  Datenschutz
                </label>
                <p id="privacy-description" className="text-gray-500">
                  Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur
                  Beantwortung meiner Anfrage erhoben und verarbeitet werden.
                  Die Daten werden nach abgeschlossener Bearbeitung Ihrer
                  Anfrage gelöscht. Detaillierte Informationen zum Umgang mit
                  Nutzerdaten finden Sie in unserer{' '}
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
