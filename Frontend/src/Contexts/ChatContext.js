import React, { createContext, useState } from "react";
export const ChatContext = createContext();

function ChatContextProvider({ children }) {
	const [userText, setUserText] = useState([
		{
			senderName: "Yash Jain",
			senderId: "1",
			receiverId: "2",
			lastText: "I usually go to clubs on weekends",
		},
		{
			senderName: "Reet Nandy",
			senderId: "5",
			receiverId: "2",
			lastText: "I am kind of a lazy person",
		},
		{
			senderName: "Aman Gupta",
			senderId: "4",
			receiverId: "2",
			lastText: "My home town is Bareilley",
		},
	]);

	return (
		<ChatContext.Provider value={{ userText, setUserText }}>
			{children}
		</ChatContext.Provider>
	);
}

export default ChatContextProvider;
