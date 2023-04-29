import React from 'react';
import { createContext,useEffect,useState } from "react";
import {mails} from "../data/data";

export const MailContext = createContext();

export function MailProvider({children}){
    const [mailsData,setMailsData] = useState(mails);
return(
    <MailContext.Provider value={{mailsData}}>
        {children}
    </MailContext.Provider>
)
}