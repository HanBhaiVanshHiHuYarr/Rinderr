import React, { createContext, useState } from "react";
export const MsgContext = createContext();

function MsgContextProvider({ children }) {
	//just fr
	const [msgs, setMsgs] = useState({
		1: [
			{
				msg: "Hey Vansh, how are you ?",
				senderId: "0",
				receiverId: "1",
			},
			{
				msg: "Helloo !! I am good, what about you ?",
				senderId: "1",
				receiverId: "0",
			},
			{
				msg: "I am also good",
				senderId: "0",
				receiverId: "1",
			},
		],
		2: [],
		3: [],
		4: [],
	});

	const createMsg = (val) => {
		
		setMsgs({
			...msgs,
			1: [
				...msgs[1],
				{
					msg: val,
					senderId: "1",
					receiverId: "0",
				},
			],
		});
		
	}

	return (
		<MsgContext.Provider value={{ msgs, setMsgs, createMsg }}>
			{ console.log(msgs)}
			{children}
		</MsgContext.Provider>
	);
}

export default MsgContextProvider;
