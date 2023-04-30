import React, {useContext, useEffect, useState} from 'react';
import {MailContext} from '..';

export function Inbox() {
    const {mailsData} = useContext(MailContext);
    const [filteredMails,setFilteredMails] = useState(mailsData);
    const [appliedFilters,setAppliedFilters] = useState([]);
    console.log(appliedFilters);

    const handleappliedFilters = (filterValue) =>{!appliedFilters.includes(filterValue)?setAppliedFilters([...appliedFilters,filterValue]):setAppliedFilters(appliedFilters.filter((filterName)=>filterName !== filterValue))}

    const handleFilters = () =>{
      let unreadCheck = appliedFilters.includes('unread')?mailsData.filter(({unread})=>unread):mailsData;

      let starredCheck = appliedFilters.includes('starred')?unreadCheck.filter(({isStarred})=>isStarred):unreadCheck;

      setFilteredMails(starredCheck);
    }

    useEffect(()=>{handleFilters()},[appliedFilters])

    return (
        <div className='inbox'>
            <fieldset className='filters-container'>
            <legend>Filters</legend>
              <label><input type="checkbox" value="unread" onChange={(e)=>handleappliedFilters(e.target.value)} />Show unread mails</label>
              <label><input type="checkbox" value="starred" onChange={(e)=>handleappliedFilters(e.target.value)} />Show starred mails</label>
            </fieldset>
            <h3>Unread: {filteredMails.reduce((acc,{unread})=>unread?acc+=1:acc,0)}</h3>
            <ul>
                {filteredMails.map(({mId, subject, content, isStarred,unread}) =>
                <li key = {mId} style={{background:unread?'#F2F6FC':'none'}} className="mail-item"> 
                    <div className='inbox-header'>
                      <h3>Subject: {subject}</h3>
                      <button>{isStarred? 'UnStar': 'Star'}</button>
                    </div> 
                    <p> {content} </p>
                    <div className='inbox-btns-container'>
                      <button className='view-btn'>View Details</button > 
                      <div className='inbox-click-container'>
                        <button>Delete</button>
                        <button>Mark as {unread?'Read':'Unread'}</button>
                        <button>Report Spam</button>
                      </div> 
                    </div>
                 </li>)}
            </ul>
        </div>
    );
}
