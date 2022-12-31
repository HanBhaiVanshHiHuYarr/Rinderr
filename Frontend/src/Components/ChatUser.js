import React from "react";
import Person from "../assets/Icons/Person.png";

function ChatUser({ name, text, id, setClicked, setName }) {
	return (
		<div className='w-full h-20 bg-neutral-100 my-4 rounded-2xl flex py-3 pl-2 pr-1' onClick={() => { setName(name); setClicked(true)}}>
			<img src={Person} className='max-h-full' />
			<div className='px-2'>
				<h3 className='font-semibold text-sm text-neutral-800'>{name}</h3>
				<h3 className=' text-sm text-neutral-400'>{text}</h3>
			</div>
		</div>
	);
}

export default ChatUser;
