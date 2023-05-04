import React, { useContext } from 'react';
import { MailContext } from '..';


export function Spam() {
  const {state:{spam}} = useContext(MailContext);
  return (
    <div className='spam'>
      <h1>{spam.length>0?null:'Spam is Empty'}</h1>
      <ul>
      {spam && spam.map((spamMail) =>
                { const {mId, subject, content} = spamMail;
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
