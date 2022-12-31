import React, { useContext } from "react";
import { ChatContext } from "../Contexts/ChatContext";
import ChatUser from "./ChatUser";

function ChatList({ setClicked, setName }) {
	const { userText } = useContext(ChatContext);

	return (
		<div className='py-2 p-4'>
			{userText.map((user) => {
				return (
					<ChatUser
						name={user.senderName}
						text={user.lastText}
						id={user.senderId}
						setClicked={setClicked}
						setName={setName}
					/>
				);
			})}
		</div>
	);
}

export default ChatList;
