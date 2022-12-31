import React from "react";

import Send from "../assets/Icons/Send.png";
import Male1 from "../assets/Avatars/Male1.png";
import Female1 from "../assets/Avatars/Female1.png";
import { useNavigate } from "react-router-dom";
import { Interests } from "./Interests";

function User({ name, id, occupation, company, oneLine }) {
	let navigate = useNavigate();
	return (
		<div className='w-full bg-neutral-100 h-full flex flex-col p-5'>
			<div className=' bg-neutral-50 drop-shadow-md rounded-2xl p-2  flex flex-col items-center'>
				<h2 className='font-thin italic text-center'>{oneLine}</h2>

				{id == 100 ? (
					<img src={Female1} className='max-h-40' />
				) : (
					<img src={Male1} className='max-h-40' />
				)}

				<h2 className='font-bold text-2xl  text-center'>{name}, 21</h2>
				<h2 className=' '>
					{occupation}, {company}
				</h2>
			</div>
			<h2 className='text-center font-semibold m-5'>MUTUAL INTERESTS</h2>
			<Interests />
			<div className='grow flex justify-center items-center'>
				<button
					onClick={() => {
						navigate(`/chat`, { state: { id: id, name:name } });
					}}
					className='bg-green-500 rounded-2xl p-2 px-5 text-lg font-bold text-white flex'>
					CHAT NOW <img src={Send} alt='send' className='pl-4' />
				</button>
			</div>
		</div>
	);
}

export default User;
