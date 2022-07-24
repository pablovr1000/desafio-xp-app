import React, { useContext }from 'react';
import xpContext from '../context/xpContext';
import './Header.css'

export default function Header() {
  const { userData } = useContext(xpContext);

  return (
    <header className="header">
      <h2 data-testid="header" className="title">Simulador de investimentos</h2>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="user-data">
        <span data-testid="user" className="user">{userData.name}</span>
        <span data-testid="email" className="email">{userData.email}</span>
        <span data-testid="email" className="email">{userData.dateLogin}</span>
      </div>
      <div></div>
    </header>
  );
}
