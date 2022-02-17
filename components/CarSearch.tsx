import {FC, ReactElement, useEffect, useState} from 'react';
import {addDays, format, toDate} from 'date-fns';

import {useMachine} from '@xstate/react';
import {assign, createMachine} from 'xstate';
import {inspect} from '@xstate/inspect';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

function formatDate(date: number | Date) {
	return format(date, 'yyyy-MM-dd');
}

interface ICalenderInput {
	value: any;
	onChange: any;
	disabled?: boolean;
	error: any;
	label: string;
}

const CalendarInput: FC<ICalenderInput> = ({
	value,
	onChange,
	disabled,
	error,
	label,
}) => {
	const [touched, setTouched] = useState(false);
	return (
		<>
			<label data-state={error && touched ? 'error' : 'idle'}>
				<span>{label}</span>
				<input
					name="startDate"
					placeholder="Start date"
					className="block w-full rounded-md border-gray-300 shadow-sm focus:border-itana-red/50 focus:ring-itana-red/50 sm:text-sm"
					type="date"
					onChange={e => {
						onChange(e.target.value);
					}}
					value={value}
					disabled={disabled}
					onBlur={e => setTouched(true)}
				/>
			</label>
		</>
	);
};

const today = new Date();

let startDate2 = new Date();
startDate2.setDate(today.getDate() + 2);

const calendarMachine = createMachine({
	context: {
		startDate: startDate2,
		returnDate: undefined,
		startTime: undefined,
		returnTime: undefined,
	},
	id: 'calender',
	initial: 'editing',
	states: {
		editing: {
			on: {
				'startDate.UPDATE': {
					actions: 'xstate.assign',
					target: '#calender.editing',
				},
				'returnDate.UPDATE': {
					actions: 'xstate.assign',
					target: '#calender.editing',
				},
				'startTime.UPDATE': {
					actions: 'xstate.assign',
					target: '#calender.editing',
				},
				'returnTime.UPDATE': {
					actions: 'xstate.assign',
					target: '#calender.editing',
				},
				SUBMIT: {
					target: '#calender.submitted',
				},
			},
		},
		submitted: {
			type: 'final',
		},
	},
});

export const CalendarStateMachine = () => {
	const [state, send] = useMachine(calendarMachine, {devTools: true});
	const {startDate, returnDate, startTime, returnTime} = state.context;

	const canSubmit = calendarMachine.transition(state, 'SUBMIT').changed;

	//const [state, send] = useMachine(toggleMachine);

	return (
		<form>
			{console.log('state', state)}
			{console.log(startDate)}
			{console.log(startDate2)}
			<div className="my-8">
				<div className="grid grid-cols-1 md:grid-cols-2">
					<li className="overflow-hidden bg-white py-4 px-4 shadow sm:rounded-md sm:px-6">
						<CalendarInput
							value={startDate}
							onChange={value => send({type: 'startDate.UPDATE', value})}
							error={!startDate}
							label="Start date"
						/>
					</li>
					<li className="overflow-hidden bg-white py-4 px-4 shadow sm:rounded-md sm:px-6">
						<CalendarInput
							value={returnDate}
							onChange={value => send({type: 'returnDate.UPDATE', value})}
							error={!returnDate || returnDate <= startDate}
							label="Return date"
						/>
					</li>

					{/* 	<li className="overflow-hidden bg-white py-4 px-4 shadow sm:rounded-md sm:px-6">
						<label htmlFor="pickUpTime">Abholzeit</label>
						<input
							type="time"
							id="pickUpTime"
							name="pickUpTime"
							className="block w-full rounded-md border-gray-300 shadow-sm focus:border-itana-red/50 focus:ring-itana-red/50 sm:text-sm"
							onChange={e => setPickUpTime(e.target.value)}
							value={pickUpTime}
							required
						/>
					</li>

					<li className="overflow-hidden bg-white py-4 px-4 shadow sm:rounded-md sm:px-6">
						<label htmlFor="returnTime">Rückgabezeit</label>
						<input
							type="time"
							id="returnTime"
							name="returnTime"
							className="block w-full rounded-md border-gray-300 shadow-sm focus:border-itana-red/50 focus:ring-itana-red/50 sm:text-sm"
							onChange={e => setReturnTime(e.target.value)}
							value={returnTime}
							required
						/>
					</li> */}
				</div>
				<button
					type="button"
					onClick={() => send('SUBMIT')}
					disabled={!canSubmit}
					data-state={state.toStrings().join(' ')}
					className="inline-flex w-full items-center rounded-full border border-transparent bg-itana-red/75 py-3 px-6 text-base font-medium text-white shadow-lg shadow-itana-red/50 hover:bg-itana-red/60 focus:outline-none focus:ring-2 focus:ring-itana-red focus:ring-offset-2"
				>
					{state.matches('editing') && 'Auto suchen'}
					{state.matches('submitted') && 'Success!'}
					<span className="text-center"></span>
				</button>
			</div>
		</form>
	);
};

interface Props {}

export const CarSearch: FC<Props> = () => {
	const today = new Date();

	const startDate = addDays(today, 2);
	const endDate = addDays(startDate, 7);
	const todayDays = formatDate(startDate);
	const tomorrowDays = formatDate(endDate);

	const [pickUpDate, setPickUpDate] = useState(todayDays);
	const [returnDate, setReturnDate] = useState(tomorrowDays);
	const [pickUpTime, setPickUpTime] = useState('08:00');
	const [returnTime, setReturnTime] = useState('08:00');

	useEffect(() => {
		const d = new Date(pickUpDate);
		const date = addDays(d, 7);
		setReturnDate(formatDate(date));
		return () => {};
	}, [pickUpDate]);

	return (
		<div>
			{/* {console.log(today)}
			{console.log(pickUpDate)} */}

			<ul role="list" className="space-y-3">
				<h2>Buchungszeitraum</h2>
				<div className="grid grid-cols-1 md:grid-cols-2">
					<li className="overflow-hidden bg-white py-4 px-4 shadow sm:rounded-md sm:px-6">
						<label htmlFor="pickUpDate">Von </label>
						<input
							type="date"
							id="pickUpDate"
							name="pickUpDate"
							className="block w-full rounded-md border-gray-300 shadow-sm focus:border-itana-red/50 focus:ring-itana-red/50 sm:text-sm"
							onChange={e => setPickUpDate(e.target.value)}
							value={pickUpDate}
							min={todayDays}
							required
						/>
					</li>

					<li className="overflow-hidden bg-white py-4 px-4 shadow sm:rounded-md sm:px-6">
						<label htmlFor="returnDate">Bis </label>
						<input
							type="date"
							id="returnDate"
							name="returnDate"
							className="block w-full rounded-md border-gray-300 shadow-sm focus:border-itana-red/50 focus:ring-itana-red/50 sm:text-sm"
							onChange={e => setReturnDate(e.target.value)}
							value={returnDate}
							min={pickUpDate}
							required
						/>
					</li>

					<li className="overflow-hidden bg-white py-4 px-4 shadow sm:rounded-md sm:px-6">
						<label htmlFor="pickUpTime">Abholzeit</label>
						<input
							type="time"
							id="pickUpTime"
							name="pickUpTime"
							className="block w-full rounded-md border-gray-300 shadow-sm focus:border-itana-red/50 focus:ring-itana-red/50 sm:text-sm"
							onChange={e => setPickUpTime(e.target.value)}
							value={pickUpTime}
							required
						/>
					</li>

					<li className="overflow-hidden bg-white py-4 px-4 shadow sm:rounded-md sm:px-6">
						<label htmlFor="returnTime">Rückgabezeit</label>
						<input
							type="time"
							id="returnTime"
							name="returnTime"
							className="block w-full rounded-md border-gray-300 shadow-sm focus:border-itana-red/50 focus:ring-itana-red/50 sm:text-sm"
							onChange={e => setReturnTime(e.target.value)}
							value={returnTime}
							required
						/>
					</li>
				</div>

				<li className="overflow-hidden bg-white py-4 px-4 sm:rounded-md sm:px-6">
					<a
						href={`https://itana.rentware.io/?fromTime=${pickUpTime}&toTime=${returnTime}&fromDate=${pickUpDate}&toDate=${returnDate}&tab=0`}
						target="_blank"
						rel="noreferrer"
					>
						{/*  "https://itana.rentware.io/?fromTime=08:00&toTime=17:00&fromDate=2022-01-14&toDate=2022-01-14&tab=0" */}
						<button
							type="button"
							className="inline-flex w-full items-center rounded-full border border-transparent bg-itana-red/75 py-3 px-6 text-base font-medium text-white shadow-lg shadow-itana-red/50 hover:bg-itana-red/60 focus:outline-none focus:ring-2 focus:ring-itana-red focus:ring-offset-2"
						>
							<span className="text-center">Auto suchen</span>
						</button>
					</a>
				</li>
			</ul>
		</div>
	);
};
