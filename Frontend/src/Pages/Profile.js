import React, { useContext } from "react";
import BottomNav from "../Components/BottomNav";
import img from "../assets/BigImage.png";
import { UserContext } from "../Contexts/UserContext";
import { Interests } from "../Components/Interests";
import { useNavigate } from "react-router-dom";

function Profile() {
	const { me } = useContext(UserContext);
	const navigate = useNavigate();
	const handleLogout = () => {
		navigate("/");
	};

	return (
		<div className='w-screen h-full bg-neutral-200 p-1 px-2 flex flex-col '>
			<div className='h-full rounded-2xl drop-shadow-md bg-white  overflow-scroll mx-2 my-4 p-6 '>
				<div className='flex'>
					<img src={img} />
					<div className='grow flex flex-col items-center justify-center'>
						<h2 className='font-bold text-3xl  text-center'>{me.name}</h2>
						<h2 className='font-thin text-sm pt-1 text-center'>
							{me.occupation}, {me.company}
						</h2>
					</div>
				</div>
				<div>
					<div className='my-5'>
						<h2 className='font-bold text-neutral-700 text-lg'> Description</h2>
						<h2 className=' text-neutral-900'>
							A very well organized person, who loves to party on weekends, and
							hit the VScode icon on weekdays I am a morning person and hit the
							gym in the morning{" "}
						</h2>
					</div>
					<h2 className='font-bold text-neutral-700 text-lg'> Preferences</h2>
					<div className='flex justify-around '>
						<h2 className='bg-red-600 py-2 px-8 rounded-xl font-bold text-white line-through decoration-4'>
							Smoking
						</h2>
						<h2 className='bg-green-600 py-2 px-8 rounded-xl font-bold text-white '>
							Drinking
						</h2>
					</div>
					<h2 className='font-bold text-neutral-700 text-lg mt-5'>
						{" "}
						Interests
					</h2>
					<Interests />
					<div className='flex items-center justify-center my-5'>
						<button
							onClick={handleLogout}
							className='bg-white  border-4 py-2 px-8 rounded-xl font-bold border-red-600 text-red-600'>
							Log Out
						</button>
					</div>
				</div>
			</div>
			<BottomNav />
		</div>
	);
}

export default Profile;
