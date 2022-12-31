import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BottomNav() {
	let navigate = useNavigate();

	return (
		<div className='w-full bg-darkBlue flex p-2 justify-around rounded-2xl '>
			{window.location.pathname == "/explore" ? (
				<div
					onClick={() => {
						navigate("/explore");
					}}>
					<i className='fa-solid fa-magnifying-glass w-full text-center text-xl text-green-500'></i>
					<h3 className='text-green-500 '>EXPLORE</h3>
				</div>
			) : (
				<div
					onClick={() => {
						navigate("/explore");
					}}>
					<i className='fa-solid fa-magnifying-glass w-full text-center text-xl text-white'></i>
					<h3 className='text-white '>EXPLORE</h3>
				</div>
			)}
			{window.location.pathname == "/chat" ? (
				<div
					onClick={() => {
						navigate("/chat");
					}}>
					<i className='fa-solid fa-message w-full text-center text-xl text-green-500'></i>
					<h3 className='text-green-500 '>Chat</h3>
				</div>
			) : (
				<div
					onClick={() => {
						navigate("/chat");
					}}>
					<i className='fa-solid fa-message w-full text-center text-xl text-white'></i>
					<h3 className='text-white '>Chat</h3>
				</div>
			)}
			{window.location.pathname == "/profile" ? (
				<div
					onClick={() => {
						navigate("/profile");
					}}>
					<i className='fa-solid fa-user w-full text-center text-xl text-green-500'></i>
					<h3 className='text-green-500 '>Profile</h3>
				</div>
			) : (
				<div
					onClick={() => {
						navigate("/profile");
					}}>
					<i className='fa-solid fa-user w-full text-center text-xl text-white'></i>
					<h3 className='text-white '>Profile</h3>
				</div>
			)}
		</div>
	);
}

export default BottomNav;
