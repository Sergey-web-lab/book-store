import { useState } from "react";

const UserForm = ({ btnText, handleClick }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="userForm">
      <h1>User Form</h1>
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => { setEmail(e.target.value) }}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => { setPassword(e.target.value) }}
        placeholder="Password"
      />
      <button
        onClick={() => handleClick(email, password)}
      >{btnText}</button>
    </div>
  );
}

export default UserForm;