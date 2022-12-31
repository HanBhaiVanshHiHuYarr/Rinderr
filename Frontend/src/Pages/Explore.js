import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import BottomNav from "../Components/BottomNav";
import { UserContext } from "../Contexts/UserContext";
import User from "../Components/User";

function Explore() {
	const { users } = useContext(UserContext);
	return (
		<div className='w-screen min-h-full bg-neutral-200 p-1 px-2 flex flex-col '>
			<div className='grow flex flex-col relative m-2 py-2 '>
				<h2 className='text-2xl font-semibold mx-2 mb-3'>Explore</h2>
				<div className='grow relative overflow-hidden '>
					<Swiper
						effect={"cards"}
						grabCursor={true}
						modules={[EffectCards]}
						className='mySwiper h-full rounded-2xl'>
						{users.map((m) => {
							return (
								<SwiperSlide>
									<User name={m.name} id={m._id} occupation={m.occupation} company={m.company} oneLine={ m.oneLine}/>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>

			<BottomNav />
		</div>
	);
}

export default Explore;
