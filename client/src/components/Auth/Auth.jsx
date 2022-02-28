// eslint-disable-next-line quotes
import { React, useState } from 'react';
// import { React } from 'react';
import {
  Form, FormGroup, Input, Label, Button
} from 'reactstrap';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './Auth.module.css';
import { signUpUser } from '../../redux/actions/userAC';
// import { MainPage } from '../MainPage/MainPage';

function Auth() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  const authHandler = async (e) => {
    e.preventDefault();
    dispatch(signUpUser({ email, password }));
    if (user) {
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
