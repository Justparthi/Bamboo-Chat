import React from "react";

export default function ChatAbout() {
	return (
		<div className="flex-1 flex items-center justify-center">
			<div className="text-center space-y-5">
				<h1 className="text-3xl font-bold">Welcome to Bamboo Chat</h1>
				<p className="w-96">
					This is a chat application that power by supabase realtime
					db. Login to send message
				</p>

				<p>(Apologies for the inconvenience. The website is hosted on the free tier of Vercel, and since I’m using Supabase for the database, there seems to be an issue. If you'd like to see how it works, feel free to create your own Supabase credentials and run it locally to view the output.)</p>
			</div>
		</div>
	);
}
