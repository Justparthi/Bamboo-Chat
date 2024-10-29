"use client";

import React, {useEffect, useRef} from 'react'
import {User} from "@supabase/supabase-js"
import { Imessage, useMessage } from './messages';

const InitMessages = ({messages}:{messages:Imessage[]}) => {

    const initState = useRef(false)



    useEffect(() => {
        if(!initState.current){
            useMessage.setState({messages})
        }


        initState.current = true;
    }, []);


  return (
    <div>
      
    </div>
  )
}

export default InitMessages
