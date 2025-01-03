import React from "react";
import ChatHeader from "@/components/ChatHeader";
import { supabaseServer } from "@/lib/supabase/server";
import InitUser from "@/lib/store/initUser";
import ChatInput from "@/components/ChatInput";
import ChatMessage from "@/components/ChatMessage";
import ChatAbout from "@/components/ChatAbout";
import Header from "@/components/Header";

export default async function Page() {
	const supabase = await supabaseServer();
	const { data } = await supabase.auth.getSession();

	return (
		<>
        <Header user={data.session?.user}/>
			<div className="max-w-3xl mx-auto md:py-10 h-screen">
				<div className=" h-full border rounded-md flex flex-col relative">
					<ChatHeader user={data.session?.user} />

					{data.session?.user ? (
						<>
							<ChatMessage />
							<ChatInput />
						</>
					) : (
						<ChatAbout />
					)}
				</div>
			</div>
			<InitUser user={data.session?.user} />
		</>
	);
}
