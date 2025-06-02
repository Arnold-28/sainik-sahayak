import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { RoleContext } from '../contexts/RoleContext';

export default function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { role } = useContext(RoleContext);

  return (
    <nav>
      <Link to="/">Home</Link> |{' '}
      {isAuthenticated ? (
        <>
          <Link to="/dashboard">Dashboard</Link> |{' '}
          <Link to="/schemes">Schemes</Link> |{' '}
          <Link to="/emergency">Emergency</Link> |{' '}
          <Link to="/marketplace">Marketplace</Link> |{' '}
          <Link to="/grievance">Grievance</Link>{' '}
          {role === 'admin' && <>| <Link to="/admin">Admin Panel</Link></>}
          {' | '}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
