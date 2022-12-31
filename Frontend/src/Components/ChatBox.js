import React, { useContext, useState } from "react";
import Person from "../assets/Icons/Person.png";
import Send from "../assets/Icons/send_dark.svg";
import Message from "./Message";
import { MsgContext } from "../Contexts/MsgContext";

function ChatBox({ setClicked, name, id }) {
	const { msgs, createMsg } = useContext(MsgContext);
	const [msg, setMsg] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		createMsg(msg, id);
		setMsg("");
		console.log(id);
	};

	return (
		<div className='bg-neutral-100 h-full flex flex-col'>
			<div className='flex bg-white drop-shadow-md rounded-xl p-2 px-4 justify-between items-center'>
				<div className='flex items-center'>
					<img src={Person} className='h-4/5' />
					<h3 className='text-2xl ml-3 text-neutral-700 font-bold'>{name}</h3>
				</div>
				<i
					className='fa-solid fa-chevron-down text-2xl ml-3 text-neutral-700 font-bold'
					onClick={() => {
						setClicked(false);
					}}></i>
			</div>
			<div className='grow'>
				<div className='h-full overflow-auto p-4'>
					{msgs["1"].map((sms) => (
						<Message text={sms.msg} id={sms.senderId} />
					))}
				</div>
			</div>
			{/* <div className=' '> */}
			<form className='bg-white m-3 rounded-2xl flex' onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Type a message'
					className='p-3 rounded-2xl focus:outline-none grow'
					value={msg}
					onChange={(e) => {
						setMsg(e.target.value);
					}}
				/>
				<button type='submit'>
					<img src={Send} className='h-auto mr-3' />
				</button>
			</form>

			{/* </div> */}
		</div>
	);
}

export default ChatBox;
