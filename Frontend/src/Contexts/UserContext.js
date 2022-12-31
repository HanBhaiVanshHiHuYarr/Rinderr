import React, { createContext, useState } from "react";
export const UserContext = createContext();

function UserContextProvider({ children }) {
	const [users, setUsers] = useState([
		{
			name: "Aman Gupta",
			_id: "963",
			email: "amangupta2001@gmail.com",
			habits: ["Gym", "Party", "Shopping"],
			occupation: "Software Engineer",
			company: "Google",
			oneLine: "Code in morning 💻 party at night 🎉",
		},
		{
			name: "Amrit Kharbanda",
			_id: "852",
			email: "amritkharbanda@gmail.com",
			habits: ["Study", "Pooja"],
			occupation: "UI/UX Designer",
			company: "Microsoft",
			oneLine: "Love to cook, come on lets have some 🥗",
		},
		{
			name: "Malaika Aggarwal",
			_id: "100",
			email: "malaika@gmail.com",
			habits: ["Gym", "Reading", "Music"],
			occupation: "Software Engineer 2",
			company: "Microsoft",
			oneLine: "I love to read books and watch movies 📖",
		
		},
		{
			name: "Yash Jain",
			_id: "741",
			email: "yashjain@gmail.com",
			habits: ["Gym", "Party", "Eating"],
			occupation: "SRE",
			company: "Apple",
			oneLine: "Love to play Tennis, come on 🎾",
		},

		{
			name: "Reet Nandy",
			_id: "789",
			email: "reetnandy@gmail.com",
			habits: ["Gym", "Reading", "Music", "Sleeping"],
			occupation: "Software Engineer",
			company: "Atlassian",
			oneLine: "Hey !! Come on, lets party together 🎉",
		},
	]);

	const [me, setMe] = useState({
		name: "Vansh Gupta",
		_id: "0",
		email: "vanshgupta2001@gmail.com",
		habits: ["Gym", "Party", "Shopping"],
		occupation: "Software Engineer",
		company: "Google",
		oneLine: "Hey !! Come on, lets explore the world 🧳",
	});

	return (
		<UserContext.Provider value={{ users, setUsers, me, setMe }}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContextProvider;
