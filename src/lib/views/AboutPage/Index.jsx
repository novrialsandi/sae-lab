"use client";

import React from "react";
import HeroAbout from "./Hero";
import WhyUs from "../Reuse/WhyUs";
import OurClient from "../Reuse/OurClient";
import ConsultNow from "../Reuse/ConsultNow";

const AboutComponent = () => {
	return (
		<>
			<HeroAbout />
			<WhyUs />
			<OurClient />
			<ConsultNow />
		</>
	);
};

export default AboutComponent;
