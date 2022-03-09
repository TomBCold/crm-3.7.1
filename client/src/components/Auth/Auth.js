// eslint-disable-next-line quotes
import { React, useState } from 'react';
import {
  Form, FormGroup, Input, Label, Button
} from 'reactstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './Auth.module.css';
import { signUpUser } from '../../redux/actions/userAC';

function Auth() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authHandler = async (e) => {
    e.preventDefault();
    await dispatch(signUpUser({ email, password }));
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
  if (user.status === 'done') {
    return <Navigate to="/" />;
  }
  if (user.status === 'error') {
    return (
      <div className={style.center}>
        <div>
          <img src="/1234.png" alt="ooo" />
        </div>
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
          <Button onClick={(e) => authHandler(e)}>Войти</Button>
        </Form>
      </div>
    );
  }
  return <h1>Загрузка</h1>;
}

export default Auth;
