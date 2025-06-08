"use client";

import React from "react";
import Button from "@/lib/components/Button";
import TextInput from "@/lib/components/TextInput";
import TextArea from "@/lib/components/TextArea";
import Dropdown from "@/lib/components/Dropdown";

const ContactComponent = () => {
	return (
		<div className="w-full flex flex-col items-center">
			<div className="w-full max-w-[1440px] px-4 sm:px-6 py-10 sm:py-20 flex flex-col lg:flex-row gap-8 lg:gap-12 lg:justify-between">
				<div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 order-2 lg:order-1">
					<div className="space-y-2 text-center lg:text-left">
						<div className="text-3xl sm:text-4xl font-semibold text-neutral-800">
							Contact
						</div>
						<div className="text-neutral-600 text-sm sm:text-base">
							Consult your project with us so we can handle it with the right
							approach.
						</div>
					</div>
					<div className="p-4 sm:p-6 space-y-4 sm:space-y-6 shadow-md rounded-2xl border border-neutral-200">
						<TextInput label="Full Name" placeholder="Full Name" />
						<Dropdown
							items={[
								{ label: "yes", value: "yes" },
								{ label: "halo", value: "halo" },
							]}
							label="Select Service"
							placeholder="Select Service"
						/>
						<TextArea
							label="Project Description"
							placeholder="Describe your own project"
						/>
						<Button className="w-full rounded-md">Send</Button>
					</div>
				</div>
				<div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end order-1 lg:order-2">
					<img
						src="/contact.png"
						alt="Contact illustration"
						className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto object-contain"
					/>
				</div>
			</div>
		</div>
	);
};

export default ContactComponent;
