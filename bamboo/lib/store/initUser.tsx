"use client";

import React, {useEffect, useRef} from 'react'
import { User } from "@supabase/supabase-js"
import { useUser } from './user'

const InitUser = ({user}:{user:User|undefined}) => {

    const initState = useRef(false)



    useEffect(() => {
        if(!initState.current){
            useUser.setState({user})
        }


        initState.current = true;
    }, []);


  return (
    <div>
      
    </div>
  )
}

export default InitUser
