"use client";

import React from "react";
import HeroAbout from "./Hero";
import WhyUs from "../../components/Reuse/WhyUs";
import OurClient from "../../components/Reuse/OurClient";
import ConsultNow from "../../components/Reuse/ConsultNow";
import MarqueeCient from "@/lib/components/Reuse/MarqueeCient";

const AboutComponent = () => {
	return (
		<>
			<HeroAbout />
			<WhyUs />
			<MarqueeCient />
			<ConsultNow />
		</>
	);
};

export default AboutComponent;
