import React, { useContext } from 'react';
import { MailContext } from '..';
import { Link } from 'react-router-dom';

export function Spam() {
  const {state:{spam},dispatch} = useContext(MailContext);
  return (
    <div className='spam'>
      <h1>{spam.length>0?null:'Spam is Empty'}</h1>
      <ul>
      {spam && spam.map((spamMail) =>
                { const {mId, subject, content,isStarred,unread} = spamMail;
                return <li key = {mId} className="mail-item" style={{background:unread?'#F2F6FC':'none'}} > 
                    <div className='inbox-header'>
                      <h3>Subject: {subject}</h3>
                      <button onClick={()=>{dispatch({ type: "STARRED", payload:mId })}}>{isStarred? 'UnStar': 'Star'}</button>
                    </div> 
                    <p> {content} </p>
                    <div className='inbox-btns-container'>
                      <Link className='view-btn' to={`/inbox/${mId}`}>View Details</Link > 
                      <div className='inbox-click-container'>
                        <button onClick={()=>{dispatch({ type: "DELETE_MAIL", payload:spamMail })}}>Delete</button>
                        <button onClick={()=>{dispatch({ type: "UNREAD", payload:mId })}}>Mark as {unread?'Read':'Unread'}</button>
                        <button onClick={()=>{dispatch({ type: "MARK_AS_NOT_SPAM", payload:spamMail })}}>Report Not Spam</button>
                      </div> 
                    </div>
                 </li>})}
      </ul>
    </div>
  );
}
