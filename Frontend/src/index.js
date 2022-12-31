import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Explore from "./Pages/Explore";
import Chat from "./Pages/Chat";
import UserContextProvider from "./Contexts/UserContext";
import ChatContextProvider from "./Contexts/ChatContext";
import MsgContextProvider from "./Contexts/MsgContext";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<UserContextProvider>
			<ChatContextProvider>
				<MsgContextProvider>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<App />} />
							<Route path='login' element={<Login />} />
							<Route path='explore' element={<Explore />} />
							<Route path='chat' element={<Chat />} />
							<Route path='profile' element={<Profile />} />
						</Routes>
					</BrowserRouter>
				</MsgContextProvider>
			</ChatContextProvider>
		</UserContextProvider>
	</React.StrictMode>
);
