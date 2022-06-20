/* eslint-disable react/display-name */
import {ExclamationCircleIcon} from '@heroicons/react/solid';
import {forwardRef, PropsWithoutRef} from 'react';
import {useField} from 'react-final-form';

export interface LabeledTextFieldProps
  extends PropsWithoutRef<JSX.IntrinsicElements['input']> {
  /** Field name. */
  name: string;
  /** Field label. */
  label: string;
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'date';

  outerProps?: PropsWithoutRef<JSX.IntrinsicElements['div']>;

  children?: React.ReactNode | React.ReactNode[];
}

export const LabeledTextField = forwardRef<
  HTMLInputElement,
  LabeledTextFieldProps
>(({name, label, outerProps, ...props}, ref) => {
  const {
    input,
    meta: {touched, error, submitError, submitting},
  } = useField(name, {
    parse: props.type === 'number' ? Number : undefined,
  });

  const normalizedError = Array.isArray(error)
    ? error.join(', ')
    : error || submitError;

  return (
    <div {...outerProps}>
      {touched && normalizedError ? (
        <div>
          <label className="block text-sm font-medium text-red-600">
            {label} {normalizedError}
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              className="block w-full rounded-md border-red-500 shadow-sm sm:text-sm focus:border-red-500 focus:ring-red-500"
              {...input}
              disabled={submitting}
              {...props}
              ref={ref}
            />
            <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
              <ExclamationCircleIcon
                className="w-5 h-5 text-red-500"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative mt-1 rounded-md shadow-sm">
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
          <input
            className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:ring-itana-red focus:border-itana-red"
            {...input}
            disabled={submitting}
            {...props}
            ref={ref}
          />
        </div>
      )}
    </div>
  );
});

export default LabeledTextField;
