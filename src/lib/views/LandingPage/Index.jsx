"use client";

import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import WhyUs from "../Reuse/WhyUs";
import Services from "../Reuse/Services";
import Detail from "./Detail";

const HomeComponent = () => {
	return (
		<>
			<Hero />
			<WhyUs />
			<Detail />
			<Services />
		</>
	);
};

export default HomeComponent;
