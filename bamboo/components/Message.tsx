import { Imessage, useMessage } from '@/lib/store/messages';
import React from 'react';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

import Image from 'next/image';
import { MoreHorizontal } from 'lucide-react';
import { useUser } from '@/lib/store/user';

const Message = ({ message }: { message: Imessage }) => {
  const user = useUser((state) => state.user);

  const userAvatarUrl = message.users?.avatar_url ?? ''; 
  const userDisplayName = message.users?.display_name ?? 'Unknown'; 
  const messageDate = message.created_at ? new Date(message.created_at).toDateString() : ''

  return (
    <div className='flex gap-2'>
      <div>
        <Image
          src={userAvatarUrl}
          alt={userDisplayName}
          width={40}
          height={40}
          className='rounded-full ring-2'
        />
      </div>
      <div className='flex-1'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1'>
            <h1 className='font-bold'>{userDisplayName}</h1>
            <h1 className='text-sm text-gray-400'>{messageDate}</h1>
            {message.is_edit && <h1 className='text-sm text-gray-400'>edited</h1>}
          </div>
          {message.users?.id === user?.id && <MessageMenu message={message} />}
        </div>
        <p className='text-gray-300'>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;

const MessageMenu = ({ message }: { message: Imessage }) => {
  const setActionMessage = useMessage((state) => state.setActionMessage);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontal />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Action</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            document.getElementById('trigger-edit')?.click();
            setActionMessage(message);
          }}
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            document.getElementById('trigger-delete')?.click();
            setActionMessage(message);
          }}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
