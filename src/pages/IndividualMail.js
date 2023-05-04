import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import {MailContext} from '..';


export function IndividualMail() {
  const {mailid} = useParams();
  const {state:{mails}} = useContext(MailContext);
  let individualMail;
  if(mailid && mails){
    individualMail = mails.find(({mId})=>mId === mailid);
  }
  return (
    <>
    {individualMail && <div className='individual-mail'>
      <h2>{individualMail.subject}</h2>
      <p> {individualMail.content} </p>
      <p style={{color:individualMail.unread?'red':'green'}}>Status: {individualMail.unread?'Unread':'Read'}</p>
    </div>}
    </>
  );
}
