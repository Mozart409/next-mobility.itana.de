import cx from 'classnames';
import {PropsWithoutRef, ReactNode, useState} from 'react';
import {
  Form as FinalForm,
  FormProps as FinalFormProps,
  FormSpy,
} from 'react-final-form';
import * as z from 'zod';
export {FORM_ERROR} from 'final-form';
import {OnChange} from 'react-final-form-listeners';
export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements['form']>, 'onSubmit'> {
  /** All your form fields */
  children?: ReactNode;
  /** Text to display in the submit button */
  submitText?: string;
  schema?: S;
  onSubmit: FinalFormProps<z.infer<S>>['onSubmit'];
  initialValues?: FinalFormProps<z.infer<S>>['initialValues'];
  /** PageTitle */
  pageTitle?: string;
}

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  pageTitle,
  ...props
}: FormProps<S>) {
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md md:w-full md:max-w-xl">
        <div className="flex justify-center mx-auto">
          {/*  <Image
            className="mx-auto w-auto h-12 rounded"
            src="/apple-icon-180.png"
            alt="Carty"
            height={48}
            width={48}
          /> */}
        </div>

        {/* <Heading type={'h1'}>{pageTitle}</Heading> */}
        <h1 className="text-2xl font-bold leading-7 text-gray-900">
          {pageTitle}
        </h1>

        <FinalForm
          initialValues={initialValues}
          validate={values => {
            if (!schema) return;
            try {
              schema.parse(values);
            } catch (error) {
              return error.formErrors.fieldErrors;
            }
          }}
          onSubmit={onSubmit}
          render={({
            handleSubmit,
            submitting,
            submitError,
            form,
            pristine,
            values,
          }) => (
            <form onSubmit={handleSubmit} className="form" {...props}>
              {/* Form fields supplied as children are rendered here */}
              {children}

              {submitError && (
                <div role="alert" style={{color: 'red'}}>
                  {submitError}
                </div>
              )}

              {submitText && (
                <button
                  type="submit"
                  disabled={submitting}
                  className={cx(
                    'inline-flex w-full items-center rounded-full border border-transparent  py-3 px-6 text-base font-medium text-white  focus:outline-none focus:ring-2  focus:ring-offset-2 mt-4',
                    {
                      'bg-itana-red/75 shadow-lg shadow-itana-red/50 hover:bg-itana-red/60 focus:ring-itana-red ':
                        !submitting,
                      'cursor-not-allowed opacity-50 bg-slate-900/75 shadow-lg shadow-slate-900/50 hover:bg-slate-900/60 focus:ring-slate-900':
                        submitting,
                    }
                  )}
                >
                  <span className="text-center">{submitText}</span>
                </button>
              )}
            </form>
          )}
        />
      </div>
    </div>
  );
}

export default Form;
