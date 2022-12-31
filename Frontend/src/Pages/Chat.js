import React, { useState, useContext, useEffect } from "react";
import BottomNav from "../Components/BottomNav";
import Person from "../assets/Icons/Person.png";
import ChatUser from "../Components/ChatUser";
import { ChatContext } from "../Contexts/ChatContext";
import ChatList from "../Components/ChatList";
import ChatBox from "../Components/ChatBox";
import { useLocation } from "react-router-dom";

function Chat() {
	const { userText } = useContext(ChatContext);
	const [clicked, setClicked] = useState(false);
	const [name, setName] = useState("Vansh Gupta")
	const [id, setId] = useState(741)

	const {state} = useLocation()

	useEffect(() => {
		state != null && setName(state.name)
		state != null && setId(state.id)
		state != null && setClicked(true)

	}, [state])


	return (
		<div className='w-screen h-full bg-neutral-200 p-1 px-2 flex flex-col '>
			<div className='h-full rounded-2xl drop-shadow-md bg-white  overflow-scroll mx-2 my-4 '>
				{clicked ? (
					<ChatBox setClicked={setClicked} name={name} id={id}/>
				) : (
					<ChatList setClicked={setClicked} setName = {setName} />
				)}
			</div>
			<BottomNav />
		</div>
	);
}

export default Chat;
