import { useState } from 'react';
export default function Person() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  return (
    <>
      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" id="firstName" value={firstName}
        onChange={(event) => setFirstName(event.target.value)}/>
      <label htmlFor="lastName">Last Name</label>
      <input type="text" name="lastName" id="lastName" value={lastName}
       onChange={(event) => setLastName(event.target.value)} />
      <h1>{firstName + ' ' + lastName}</h1>
    </>
  );
}
