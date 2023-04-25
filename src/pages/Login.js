import React from 'react';
import Input from '../components/Input';
import useInput from '../utils/customHooks';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { NotesAPI } from '../utils/api';
import PropTypes from 'prop-types';

const Login = ({ authLogin }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const loginUser = await NotesAPI.login({ email, password });
    const { data } = loginUser;
    authLogin(data);
  };

  return (
    <div className="auth-section">
      <div className="auth-header">
        <h2>Login</h2>
      </div>
      <form onSubmit={onSubmitHandler} className="form login-form">
        <Input
          name={email}
          onChange={onEmailChange}
          placeholder="Masukkan Email"
          value={email}
          label="Email"
          type="email"
        />
        <Input
          name={password}
          onChange={onPasswordChange}
          placeholder="Masukkan Password"
          value={password}
          label="Password"
          type="password"
        />
        <div>
          <Button text="Login" />
        </div>
        <div>
          <p>Belum memiliki akun?</p>
          <Link to="/register">Silahkan Daftar</Link>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  authLogin: PropTypes.func.isRequired,
};

export default Login;
