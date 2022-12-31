import { useState } from "react";
import Friends from "../assets/Login.svg";
import { useNavigate } from "react-router-dom";

function Login() {
	const [username, setUsername] = useState("");
	const [pass, setPass] = useState("");
	let navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (pass == "password" && username == "vanshgupta2001@gmail.com") {
			navigate(`/explore`);
		} else {
			alert("Your email id and password does not match, try again.");
			setUsername("");
			setPass("");
		}
	};

	return (
		<div className='w-screen h-full bg-neutral- pt-12 px-5'>
			<h1 className='text-6xl font-bold text-neutral-800  '>
				Rinderr .
			</h1>
			<h3 className='text-xl font-normal  text-neutral-800 my-2 '>
				WELCOME BACK !!
			</h3>
			<img src={Friends} alt='Friends sitting together' />
			<form onSubmit={handleSubmit}>
				<div className='mx-5'>
					<div className='flex flex-col'>
						<label for='username' className='mx-1 font-semibold'>
							Email
						</label>
						<input
							type='email'
							id='username'
							className=' p-3 rounded-2xl bg-neutral-100'
							required
							placeholder='Email'
							value={username}
							onChange={(e) => {
								setUsername(e.target.value);
							}}
						/>
					</div>
					<div className='flex flex-col'>
						<label for='password' className='mx-1 mt-2 font-semibold'>
							Password
						</label>
						<input
							type='password'
							id='password'
							className=' p-3 bg-neutral-100 rounded-2xl'
							required
							placeholder='*********'
							value={pass}
							onChange={(e) => {
								setPass(e.target.value);
							}}
						/>
					</div>
					<button
						type='submit'
						className='bg-indigo-700 w-full rounded-2xl mt-8 p-3 text-white	font-semibold text-2xl'>
						Get Started
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login;
