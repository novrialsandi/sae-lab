import React from "react";
import { icons } from "../icons/iconSvg";

const FooterPublic = () => {
	return (
		<div className="w-full space-y-20 pt-20 pb-8 text-neutral-50  bg-primary flex flex-col items-center">
			<div className="w-full max-w-[1440px] px-6 flex flex-col md:flex-row md:justify-between gap-10">
				{/* Left section */}
				<div className="max-w-64 text-neutral-50 text-lg space-y-6">
					<div>{icons.iconLogoWhite}</div>
					<div>Jln. Wates no 123, Bantul Daerah Istimewa Yogyakarta</div>
					<div>+62 8128418128 (Sandy)</div>
				</div>

				{/* Right section */}
				<div className="flex flex-col sm:flex-row justify-between gap-10 md:gap-20 w-full text-neutral-50">
					<div className="space-y-6">
						<div className="text-lg font-bold">Company</div>
						<div className="space-y-4">
							<div>About Us</div>
							<div>Service</div>
							<div>Contact</div>
						</div>
					</div>
					<div className="space-y-6">
						<div className="text-lg font-bold">Follow Us</div>
						<div className="space-y-4">
							<div>Facebook</div>
							<div>Twitter</div>
							<div>Instagram</div>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className="max-w-[1440px] text-sm px-6 w-full space-y-6">
				<div className="border-t border-neutral-50 w-full" />
				<div className="text-center">© 2025 SAE. All rights reserved</div>
			</div>
		</div>
	);
};

export default FooterPublic;
