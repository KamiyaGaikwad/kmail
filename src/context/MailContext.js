import React from 'react';
import { createContext,useEffect,useReducer } from "react";
import {mails} from "../data/data";
import {MailReducer,initialState} from "../Reducer/MailReducer";

export const MailContext = createContext();

export function MailProvider({children}){
    const [state, dispatch] = useReducer(MailReducer, initialState);
    useEffect(() => {
        dispatch({ type: "GET_MAILS_DATA", payload:mails });
    }, []);

return(
    <MailContext.Provider value={{state,dispatch}}>
        {children}
    </MailContext.Provider>
)
}