import React from "react";
import IncomingMsg from "./IncomingMsg";
import OutgoingMsg from "./OutgoingMsg";

function Message({ id, text }) {
	
	return (
		<>{id == 0 ? <IncomingMsg text={text} /> : <OutgoingMsg text={text} />}</>
	);
}

export default Message;
