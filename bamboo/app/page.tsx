import React from "react";
import ChatHeader from "@/components/ChatHeader";
import { supabaseServer } from "@/lib/supabase/server";
import InitUser from "@/lib/store/initUser";
import { Input } from "@/components/ui/input";
import ChatInput from "@/components/ChatInput";
import ChatMessage from "@/components/ChatMessage";
import ChatAbout from "@/components/ChatAbout";
import Example from "@/components/Hero";
import Features from "@/components/Features";
import Header from "@/components/Header";
import TestimonialSection from "@/components/Testimonial";
import FeatuesH from "@/components/FearureHero";
import Footer from "@/components/Footer";
import CTASection from "@/components/Cta";

// export default async function Page() {
// 	const supabase = await supabaseServer();
// 	const { data } = await supabase.auth.getSession();

// 	return (
// 		<>
// 			<div className="max-w-3xl mx-auto md:py-10 h-screen">
// 				<div className=" h-full border rounded-md flex flex-col relative">
// 					<ChatHeader user={data.session?.user} />

// 					{data.session?.user ? (
// 						<>
// 							<ChatMessage />
// 							<ChatInput />
// 						</>
// 					) : (
// 						<ChatAbout />
// 					)}
// 				</div>
// 			</div>
// 			<InitUser user={data.session?.user} />
// 		</>
// 	);
// }


export default async function Page() {
	const supabase = await supabaseServer();
	const { data } = await supabase.auth.getSession();
	

	return (
		<>
			<Header user={data.session?.user}/>
			<Example />
			<Features />
			<FeatuesH />
			<CTASection />
			<TestimonialSection />
			<Footer />

		</>
	);
}