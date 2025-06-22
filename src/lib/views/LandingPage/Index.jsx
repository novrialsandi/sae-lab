"use client";

import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import WhyUs from "../../components/Reuse/WhyUs";
import Services from "../../components/Reuse/Services";
import Detail from "./Detail";
import MarqueeCient from "@/lib/components/Reuse/MarqueeCient";
import ConsultNow from "@/lib/components/Reuse/ConsultNow";
import FAQ from "@/lib/components/Reuse/FAQ";

const HomeComponent = () => {
	return (
		<>
			<Hero />
			<WhyUs />
			<Detail />
			<Services />
			<MarqueeCient />
			<FAQ />
			<ConsultNow />
		</>
	);
};

export default HomeComponent;
