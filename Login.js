import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { RoleContext } from '../contexts/RoleContext';
import { useNavigate } from 'react-router-dom';
import { login as loginService } from '../services/authService';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const { login } = useContext(AuthContext);
  const { setRole } = useContext(RoleContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginService({ email, password });
      login();
      setRole(role);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="officer">Officer</option>
        <option value="admin">Admin</option>
        <option value="family">Family</option>
      </select>
      <button type="submit">Login</button>
    </form>
  );
}
