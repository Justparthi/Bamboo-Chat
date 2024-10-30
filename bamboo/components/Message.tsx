import { Imessage, useMessage } from '@/lib/store/messages'
import React from 'react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'

import Image from 'next/image'
import { MoreHorizontal } from 'lucide-react'
import { useUser } from '@/lib/store/user'
import { stat } from 'fs'

const Message = ({message} : { message: Imessage }) => {

    const user = useUser((state) => state.user);

  return (
    <div className='flex gap-2'>
        <div>
        <Image src={message.users?.avatar_url!} alt={message.users?.display_name!} width={40} height={40} className='rounded-full ring-2'/>
        </div>
                       <div className='flex-1'>
                        <div className='flex items-center justify-between'>

                            <div className='flex items-center gap-1'>

                            <h1 className='font-bold'>{message.users?.display_name}</h1>
                            <h1 className='text-sm text-gray-400'>
                                {new Date(message.created_at).toDateString()}
                            </h1>
                            </div>
                            {message.users?.id === user?.id && <MessageMenu message={message} />}
                        </div>

                        <p className='text-gray-300'>{message.text}</p>

                    </div>

                </div>
  )
}


export default Message


const MessageMenu = ({message}: {message:Imessage}) =>{

    const setActionMessage =  useMessage((state) => state.setActionMessage)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <MoreHorizontal />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Action</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem onClick={()=>{
                    document.getElementById('trigger-delete')?.click();
                    setActionMessage(message);
                }}>Delete</DropdownMenuItem>
                

            </DropdownMenuContent>
        
        </DropdownMenu>
    )
}
