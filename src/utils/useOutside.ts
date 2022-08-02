import { AnyRecord } from "dns";
import React, { useEffect, useRef, useState } from "react";

export function useOutside (initialIsVisible: boolean) {
    const [isShow, setIsShow] = useState <boolean> (initialIsVisible)
    const ref = useRef <HTMLElement> (null)

       useEffect(()=>{
        const handleClickOutside = (event:Event) =>{   
            if (isShow && ref.current  && !ref.current.contains (event.target as Node)) {
                setIsShow(false)
            }
        }
        document.addEventListener('click', (event)=>handleClickOutside(event))
        return document.removeEventListener('click', (event)=>handleClickOutside(event))
    }, [isShow])

    return {ref, isShow, setIsShow}

}