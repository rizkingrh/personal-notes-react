import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/login');
    }
  }

  return (
    <section className='register-page'>
      <div className='auth-container'>
        <h2>Create Your Account</h2>
        <RegisterInput register={onRegisterHandler} />
        <p>Already have an account? <Link to="/login">Log In</Link></p>
      </div>
    </section>
  );
}

export default RegisterPage;
