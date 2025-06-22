"use client";

import React from "react";
import HeroAbout from "./Hero";
import WhyUs from "../../components/Reuse/WhyUs";
import OurClient from "../../components/Reuse/OurClient";
import ConsultNow from "../../components/Reuse/ConsultNow";

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
