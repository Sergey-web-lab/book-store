import styles from "./UserForm.module.css";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const UserForm = ({ btnText, handleClick }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={styles.userForm}>
      <InputGroup>
        <InputGroup.Text id="email">Email</InputGroup.Text>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter your email"
          aria-label="Enter your email"
          aria-describedby="email"
          value={email}
          onChange={e => { setEmail(e.target.value) }}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text id="password">Password</InputGroup.Text>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          aria-label="Enter your password"
          aria-describedby="password"
          name="password"
          value={password}
          onChange={e => { setPassword(e.target.value) }}
        />
      </InputGroup>
      <Button
        onClick={() => handleClick(email, password)}
        variant="primary"
      >{btnText}</Button>
    </div>
  );
}

export default UserForm;