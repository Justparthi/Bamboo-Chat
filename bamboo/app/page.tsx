import React from "react";
import { supabaseServer } from "@/lib/supabase/server";
import Example from "@/components/Hero";
import Features from "@/components/Features";
import Header from "@/components/Header";
import TestimonialSection from "@/components/Testimonial";
import FeatuesH from "@/components/FearureHero";
import Footer from "@/components/Footer";
import CTASection from "@/components/Cta";


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