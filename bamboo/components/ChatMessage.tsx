import React, { Suspense } from 'react'
import ListMessages from './ListMessages'
import { supabaseServer } from '@/lib/supabase/server'
import InitMessages from '@/lib/store/initMessages';

export default async function ChatMessage() {
    
    const supabase = await supabaseServer();

    const {data} = await supabase.from("message").select("* ,users(*)")

    console.log(data)

  return (
    <Suspense fallback={"loading.."}>
      <ListMessages />
      <InitMessages messages={data || []} />
    </Suspense>
  )
}

