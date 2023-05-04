import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {MailContext} from '..';

export function Inbox() {
    const {state:{appliedFilters,mails},dispatch} = useContext(MailContext);
    const [filteredMails,setFilteredMails] = useState(mails);

    const handleFilters = () =>{
      let unreadCheck = appliedFilters.includes('unread')?mails.filter(({unread})=>unread):mails;

      let starredCheck = appliedFilters.includes('starred')?unreadCheck.filter(({isStarred})=>isStarred):unreadCheck;

      setFilteredMails(starredCheck);
    }

    useEffect(()=>{handleFilters()},[appliedFilters,mails])

    return (
        <div className='inbox'>
            <fieldset className='filters-container'>
            <legend>Filters</legend>
              <label><input type="checkbox" checked={appliedFilters.includes("unread")} value="unread" onChange={(e)=>{dispatch({ type: "FILTERS", payload:e.target.value })}} />Show unread mails</label>
              <label><input type="checkbox" checked={appliedFilters.includes("starred")} value="starred" onChange={(e)=>{dispatch({ type: "FILTERS", payload:e.target.value })}} />Show starred mails</label>
            </fieldset>
            <h3>Unread: {filteredMails.reduce((acc,{unread})=>unread?acc+=1:acc,0)}</h3>
            <ul>
                {filteredMails.length>0?filteredMails.map((filtermail) =>
                { const {mId, subject, content, isStarred,unread} = filtermail;
                return <li key = {mId} style={{background:unread?'#F2F6FC':'none'}} className="mail-item"> 
                    <div className='inbox-header'>
                      <h3>Subject: {subject}</h3>
                      <button onClick={()=>{dispatch({ type: "STARRED", payload:mId })}}>{isStarred? 'UnStar': 'Star'}</button>
                    </div> 
                    <p> {content} </p>
                    <div className='inbox-btns-container'>
                      <Link className='view-btn' to={`/inbox/${mId}`}>View Details</Link > 
                      <div className='inbox-click-container'>
                        <button onClick={()=>{dispatch({ type: "DELETE_MAIL", payload:filtermail })}}>Delete</button>
                        <button onClick={()=>{dispatch({ type: "UNREAD", payload:mId })}}>Mark as {unread?'Read':'Unread'}</button>
                        <button onClick={()=>{dispatch({ type: "MARK_AS_SPAM", payload:filtermail })}}>Report Spam</button>
                      </div> 
                    </div>
                 </li>}):"No Mails found"}
            </ul>
        </div>
    );
}
