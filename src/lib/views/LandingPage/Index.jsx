"use client";

import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import WhyUs from "../Reuse/WhyUs";
import Detail from "./Detail";

const HomeComponent = () => {
	return (
		<>
			<Hero />
			<WhyUs />
			<Detail />
		</>
	);
};

export default HomeComponent;
