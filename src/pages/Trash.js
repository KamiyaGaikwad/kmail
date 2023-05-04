import React, { useContext } from 'react';
import { MailContext } from '../context/MailContext';


export function Trash() {
  const {state:{trash}} = useContext(MailContext);
  return (
    <div className='trash'>
      <h1>{trash.length>0?null:'Trash is Empty'}</h1>
      <ul>
      {trash && trash.map((trashMail) =>
                { const {mId, subject, content} = trashMail;
                return <li key = {mId} className="mail-item"> 
                    <div className='inbox-header'>
                      <h3>Subject: {subject}</h3>
                    </div> 
                    <p> {content} </p>
                 </li>})}
      </ul>
    </div>
  );
}
