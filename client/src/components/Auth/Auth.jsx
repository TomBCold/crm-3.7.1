// eslint-disable-next-line quotes
import { React, useState } from 'react';
// import { React } from 'react';
import {
  Form, FormGroup, Input, Label, Button
} from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import style from './Auth.module.css';
// import { MainPage } from '../MainPage/MainPage';

function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  const authHandler = async (e) => {
    e.preventDefault();
    // dispatch(authInput(email, password));
    const res = await axios.post('/auth', { email, password });
    console.log(res.data);
    if (res.data.manager) {
      navigate('/');
    }
  };

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={style.center}>
      <h1>CRM 3.7.1</h1>
      <Form inline>
        <FormGroup floating>
          <Input
            onChange={emailInputHandler}
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
          />
          <Label for="exampleEmail">Email</Label>
        </FormGroup>
        {' '}
        <FormGroup floating>
          <Input
            onChange={passwordInputHandler}
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
          />
          <Label for="examplePassword">Password</Label>
        </FormGroup>
        {' '}
        <Button onClick={(e) => authHandler(e)}>Ввойти</Button>
      </Form>
    </div>
  );
}

export default Auth;
