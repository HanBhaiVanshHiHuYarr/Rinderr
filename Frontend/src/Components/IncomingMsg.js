import React from "react";

function IncomingMsg({ text }) {
	return (
		<div className='flex flex-row py-1'>
			<div className='bg-green-100 max-w-[70%] rounded-xl'>
				<h3 className='text-lg m-2 text-neutral-800 '>{text}</h3>
			</div>
		</div>
	);
}

export default IncomingMsg;
