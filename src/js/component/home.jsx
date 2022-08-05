import React from "react";

import Navbar from "../component/landing/navbar";
import Register from "../component/landing/register";
import Test from "../component/landing/test";
import Info2 from "../component/landing/info2";


const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Info2 /><Register />
			<Test />
		</div>
	);
};

export default Home;
