"use client";

import React from 'react'
import { Input } from './ui/input'
import { supabaseBrowser } from '@/lib/supabase/browser';
import { toast } from 'sonner';

const ChatInput = () => {

    const supabase = supabaseBrowser()

    const handleSendMessage = async (text:string) => {
        alert(text);

        const {error} =  await supabase.from("message").insert({text})

        if(error) {
            toast.error(error.message)
        }


    }

  return (
    <div className="p-5">
		<Input placeholder="Send Message" onKeyDown={(e)=>{
            if(e.key === "Enter"){
                handleSendMessage(e.currentTarget.value)
                e.currentTarget.value = "";
            }
        }}/>
	</div>
  )
}

export default ChatInput
