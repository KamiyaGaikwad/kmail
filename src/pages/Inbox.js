import React, { useContext } from 'react';
import { MailContext } from '..';


export function Inbox() {
  const {mailsData} = useContext(MailContext);
  return (
    <div>
      <h1>Inbox</h1>
      <ul>
        {mailsData.map(({mId,subject,content})=><li key={mId}><h1>{subject}</h1><p>{content}</p></li>)}
      </ul>
    </div>
  );
}
