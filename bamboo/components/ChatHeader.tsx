"use client";
import React from "react";
import { User } from "@supabase/supabase-js";
import ChatPresence from "./ChatPresence";

export default function ChatHeader({  }: { user: User | undefined }) {

	return (
		<div className="h-20">
			<div className="p-5 border-b flex items-center justify-between h-full">
				<div>
					<h1 className="text-xl font-bold">Bamboo Chat</h1>
					<ChatPresence />
				</div>
				
			</div>
		</div>
	);
}