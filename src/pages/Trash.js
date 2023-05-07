import React, { useContext } from 'react';
import { MailContext } from '../context/MailContext';
import { Link } from 'react-router-dom';


export function Trash() {
  const {state:{trash},dispatch} = useContext(MailContext);
  return (
    <div className='trash'>
      <h1>{trash.length>0?null:'Trash is Empty'}</h1>
      <ul>
      {trash && trash.map((trashMail) =>
                { const {mId, subject, content,unread} = trashMail;
                return <li key = {mId} className="mail-item" style={{background:unread?'#F2F6FC':'none'}} > 
                    <div className='inbox-header'>
                      <h3>Subject: {subject}</h3>
                    </div> 
                    <p> {content} </p>
                    <div className='inbox-btns-container'>
                      <Link className='view-btn' to={`/inbox/${mId}`}>View Details</Link > 
                      <div className='inbox-click-container'>
                        <button onClick={()=>{dispatch({ type: "RESTORE_MAIL", payload:trashMail })}}>Restore</button>
                        <button onClick={()=>{dispatch({ type: "UNREAD", payload:mId })}}>Mark as {unread?'Read':'Unread'}</button>
                        <button onClick={()=>{dispatch({ type: "MARK_AS_SPAM", payload:trashMail })}}>Report Spam</button>
                      </div> 
                    </div>
                 </li>})}
      </ul>
    </div>
  );
}
