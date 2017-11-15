import React from 'react';
import { func, string } from 'prop-types';
import {
  Card,
  Input,
  Label,
  Button,
  Row,
  Col,
  Container,
  CardTitle
} from 'reactstrap';
import '../../assets/login-form.css';
import '../../assets/button.css';

const LoginForm = ({ onChange, email, password, getUser }) => {
  return (
    <Container>
      <Card className="login-form" body>
        <CardTitle>Login</CardTitle>
        <div>
          <Label>Email</Label>
          <Input
            value={email}
            onChange={e => onChange(e.target.value, 'email')}
            type="text"
          />
        </div>
        <div>
          <Label>Password</Label>
          <Input
            value={password}
            onChange={e => onChange(e.target.value, 'password')}
            type="password"
          />
        </div>
        <span className="button-login-form-container">
          <Button
            className="button-login-form"
            onClick={() => getUser(email, password)}
          >
            Sign In
          </Button>
          <Button className="button-login-form">Register</Button>
        </span>
      </Card>
    </Container>
  );
};

LoginForm.propTypes = {
  onChange: func.isRequired,
  email: string.isRequired,
  password: string.isRequired,
  getUser: func.isRequired
};

export default LoginForm;
