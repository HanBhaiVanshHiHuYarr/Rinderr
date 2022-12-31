import Friends from "./assets/Home-Friends.svg";
import { useNavigate } from "react-router-dom";

function App() {
	let navigate = useNavigate();

	return (
		<div className='w-screen h-full flex flex-col py-6 px-5 justify-between'>
			<div>
				<h1 className='text-6xl font-bold text-neutral-800  '>Rinderr .</h1>
				<h3 className='text-xl font-normal  text-neutral-800 my-2 '>
					FIND THE PERFECT ROOMMATE
				</h3>
			</div>

			<img src={Friends} alt='Friends sitting together' />
			<div className=' flex flex-col justify-between'>
				<button
					onClick={() => {
						navigate("/login");
					}}
					className='bg-green-700 w-full rounded-2xl p-3 text-white	font-semibold text-2xl'>
					Login
				</button>
				<h3 className='font-semibold text-sm py-5 text-center text-neutral-800'>
					Haven't you registered yet ?😱
				</h3>
				<button
					onClick={() => {
						navigate("/register");
					}}
					className='bg-pink-700 w-full rounded-2xl p-3 text-white font-semibold text-2xl'>
					Register Now
				</button>
			</div>
		</div>
	);
}

export default App;
