'use client';

import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

const DateFilter = () => {
	const [startDateValues, setStartDate] = useState({
		startDate: null,
		endDate: null,
	});
	const [endDateValues, setEndDate] = useState({
		startDate: null,
		endDate: null,
	});

	function handleStartDateChange(input: any) {
		setStartDate({
			startDate: input.startDate,
			endDate: input.endDate,
		});
        console.log(input.startDate);

		if(!input.startDate) {
			setEndDate({
				startDate: null,
				endDate: null,
			});
        console.log(input.startDate);
		}
	}

	function handleEndDateChange(input: any) {
		setEndDate({
			startDate: input.startDate,
			endDate: input.endDate,
		});
        console.log(input.startDate);
	}

	return (
		<>
			<div className='col-span-6 lg:col-span-4'>
				<div className='block w-full'>
					<Datepicker
						inputClassName='w-full !text-black rounded-sm p-3 text-base border-[1px] border-gray-300 focus:outline-0'
						asSingle={true}
						useRange={false}
						minDate={new Date('2020-11-28')}
						maxDate={new Date()}
						displayFormat='DD-MM-YYYY'
						value={startDateValues}
						readOnly={true}
						onChange={handleStartDateChange}
						placeholder='তারিখ থেকে'
						popoverDirection='down'
					/>
				</div>
			</div>

			<div className='col-span-6 lg:col-span-4'>
				<div className='block w-full'>
					<Datepicker
						inputClassName='w-full rounded-sm p-3 text-base border-[1px] border-gray-300 focus:outline-0'
						asSingle={true}
						useRange={false}
						readOnly={true}
						displayFormat='DD-MM-YYYY'
						value={endDateValues}
						onChange={handleEndDateChange}
						placeholder='তারিখ পর্যন্ত'
						minDate={startDateValues.startDate || new Date('2020-11-29')}
						maxDate={new Date()}
						disabled={startDateValues.startDate === null ? true : false}
						popoverDirection='down'
					/>
				</div>
			</div>
		</>
	);
};

export default DateFilter;