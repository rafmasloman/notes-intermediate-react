import React from 'react';
import Input from '../components/Input';
import useInput from '../utils/customHooks';
import Button from '../components/Button';
import { NotesAPI } from '../utils/api';

const Register = () => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [name, onNameChange] = useInput('');

  const { register } = NotesAPI;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const registerUser = await register({ name, email, password });
    console.log(registerUser);
    // console.log({ name, email, password });
  };

  return (
    <div className="auth-section">
      <div className="auth-header">
        <h2>Register</h2>
      </div>
      <form onSubmit={onSubmitHandler} className="form login-form">
        <Input
          name={name}
          onChange={onNameChange}
          placeholder="Masukkan Nama anda"
          value={name}
          label="Nama Lengkap"
        />
        <Input
          name={email}
          onChange={onEmailChange}
          placeholder="Masukkan Email"
          value={email}
          label="Email"
        />
        <Input
          name={password}
          onChange={onPasswordChange}
          placeholder="Masukkan Password"
          value={password}
          label="Password"
        />
        <div>
          <Button text="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
