import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function LogoutButton() {
  return (
    <Link to='///'>
      <button className='btn'>Sign Out</button>
    </Link>
  );
}
