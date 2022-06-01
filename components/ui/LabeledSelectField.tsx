/* eslint-disable react/display-name */
import {forwardRef, PropsWithoutRef} from 'react';
import {useField} from 'react-final-form';
import {ExclamationCircleIcon} from '@heroicons/react/solid';

export interface LabeledSelectFieldProps
  extends PropsWithoutRef<JSX.IntrinsicElements['select']> {
  /** Field name. */
  name: string;
  /** Field label. */
  label: string;

  outerProps?: PropsWithoutRef<JSX.IntrinsicElements['div']>;

  children: React.ReactNode | React.ReactNode[];
}

export const LabeledSelectField = forwardRef<
  HTMLSelectElement,
  LabeledSelectFieldProps
>(({name, label, outerProps, ...props}, ref) => {
  const {
    input,
    meta: {touched, error, submitError, submitting},
  } = useField(name);

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
            <select
              className="block w-full rounded-md border-red-500 shadow-sm sm:text-sm focus:border-red-500 focus:ring-red-500"
              {...input}
              disabled={submitting}
              {...props}
              ref={ref}
            >
              {props.children}
            </select>
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
          <select
            className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:ring-itana-red focus:border-itana-red"
            {...input}
            disabled={submitting}
            {...props}
            ref={ref}
          >
            {props.children}
          </select>
        </div>
      )}
    </div>
  );
});

export default LabeledSelectField;
