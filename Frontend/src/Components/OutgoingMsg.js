import React from 'react'

function OutgoingMsg({text}) {
  return (
		<div>
			<div className='flex flex-row-reverse py-1'>
				<div className='bg-neutral-200 max-w-[70%] rounded-xl'>
					<h3 className='text-lg m-2 text-neutral-800 '>{text}</h3>
				</div>
			</div>
		</div>
	);
}

export default OutgoingMsg