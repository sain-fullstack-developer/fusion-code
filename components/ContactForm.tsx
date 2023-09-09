import Image from "next/image";
import React from "react";
import Button from "./Button";
import TitleIcon from "@/elements/TitleIcon";

type Props = {};

const ContactForm = (props: Props) => {
	return (
		<div className="px-4 py-10">
			<div className="flex pb-2">
				<TitleIcon width={24} height={24} color="blue" />
				<p className="ml-2 text-xl  caption-text">Start a project</p>
			</div>
			<h3 className="pb-10 text-4xl text-white sm:pb-20 sm:text-6xl font-roc">
				Let&apos;s talk about you
			</h3>
			<div className="grid sm:grid-cols-custom gap-y-6 sm:gap-6">
				<div className="border-[1px] border-[#0e1327] rounded-2xl p-4 lg:p-10 bg-[rgba(0,0,20,.92)]  h-fit">
					<div className="bg-black border-2 border-[#0e1327] rounded-full w-24 h-24 lg:mb-4 grid place-items-center">
						{/* <Image src="" width={100} height={100} alt="icon" className="" /> */}
						<TitleIcon width={60} height={60} color="blue" />
					</div>
					<div className="pb-4 text-2xl font-roc">
						<span className="caption-text">Free</span> 30min consultation
					</div>
					<div className="pb-6">
						<p className="text-white/80 md:text-lg">
							Have a new project in mind? Schedule a 30-minute discovery call or
							fill out the quick form, and together we&apos;ll explore the
							possibilities.
						</p>
					</div>
					<div className="">
						<Button
							noArrow={true}
							className="p-3 rounded-lg border-[1px] border-white/40 bg-btnBg"
							type="button">
							Schedule discovery call
						</Button>
					</div>
					<div className="pb-4"></div>
				</div>

				<div className="">
					<div className="max-w-screen-md px-4 mx-auto">
						<form action="#" className="grid gap-4 gap-y-6 lg:grid-cols-2">
							<div>
								<label
									for="name"
									className="block mb-2 text-base md:text-lg  text-white">
									Name
								</label>
								<input
									type="name"
									id="name"
									className="bg-[rgba(1,1,4,.4)] dark:focus:border-[rgb(22,2,152)] shadow-sm border-[1px] border-[rgba(255,255,255,.2)] text-white text-base md:text-lg rounded-lg focus:ring-[rgb(22,2,152)] focus:border-[rgb(22,2,152)] block w-full p-2.5"
									placeholder="Your name"
									required
								/>
							</div>
							<div>
								<label
									for="email"
									className="block mb-2 text-base md:text-lg  text-white">
									Email
								</label>
								<input
									type="text"
									id="email"
									className="bg-[rgba(1,1,4,.4)] dark:focus:border-[rgb(22,2,152)] block p-3 w-full text-base md:text-lg text-white  rounded-lg border-[1px] border-[rgba(255,255,255,.2)] shadow-sm focus:ring-[rgb(22,2,152)] focus:border-[rgb(22,2,152)]"
									placeholder="Your email address"
									required
								/>
							</div>
							<div className="sm:col-span-2">
								<label
									for="budget-estimated"
									className="block mb-2 text-base md:text-lg  text-white">
									Estimated Budget
								</label>
								<select
									title="budget"
									id="budget-estimated"
									rows="6"
									className="bg-[rgba(1,1,4,.4)] block p-2.5  w-full text-base md:text-lg text-white rounded-lg shadow-sm border-[1px] border-[rgba(255,255,255,.2)] focus:ring-[rgb(22,2,152)] focus:border-[rgb(22,2,152)]    dark:focus:border-[rgb(22,2,152)]"
									placeholder="Select One">
									<option value="">Select One</option>
									<option value="">20$</option>
									<option value="">20$</option>
									<option value="">20$</option>
								</select>
							</div>
							<div className="sm:col-span-2">
								<label
									for="summary"
									className="block mb-2 text-base md:text-lg  text-white">
									Project summary
								</label>
								<textarea
									id="summary"
									rows="6"
									className="bg-[rgba(1,1,4,.4)] block p-2.5  w-full text-base md:text-lg text-white rounded-lg shadow-sm border-[1px] border-[rgba(255,255,255,.2)] focus:ring-[rgb(22,2,152)] focus:border-[rgb(22,2,152)]    dark:focus:border-[rgb(22,2,152)]"
									placeholder="Yout mini brief..."></textarea>
							</div>
							<button
								type="submit"
								className="px-5 py-3 text-base md:text-lg  text-center text-white rounded-lg bg-btnBg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
