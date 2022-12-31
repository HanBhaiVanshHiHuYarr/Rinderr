import React from 'react'
import Coding from "../assets/Interests/Coding.png";
import Gym from "../assets/Interests/Gym.png";
import Party from "../assets/Interests/Party.png";
export const Interests = () => {
  return (
		<div className='flex w-full  justify-between mb-3 '>
			<div className='flex flex-col items-center'>
				<img src={Coding} alt='coding' />
				<h2 className='text-center font-semibold'>Coding</h2>
			</div>
			<div className='flex flex-col items-center'>
				<img src={Gym} alt='gym' />
				<h2 className='text-center font-semibold'>Gym</h2>
			</div>
			<div className='flex flex-col items-center'>
				<img src={Party} alt='party' />
				<h2 className='text-center font-semibold'>Party</h2>
			</div>
		</div>
	);
}
