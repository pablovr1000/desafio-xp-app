import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import xpContext from '../context/xpContext';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Login({children}) {
  const history = useHistory();
  const { userData, setUserData } = useContext(xpContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const PASSWORD_MIN_LENGTH = 6;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length > PASSWORD_MIN_LENGTH;
    if (isEmailValid && isPasswordValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = () => {
    setUserData({ email, name });
    localStorage.setItem('email', email);
    localStorage.setItem('nome', name);
    history.push('/ativos');
  };

  return (
    <div className="containerLogin">
      <Header/>
      <form className="formLogin">
        { console.log(userData) }
        <h3>Login</h3>
        { userData.name ? <span>último acesso: { userData.name }</span> : <></>}
        <input
          className="inputName"
          name="inputName"
          type="name"
          data-testid="name-input"
          placeholder="Nome Completo"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
        />
        <input
          className="inputLogin"
          name="email"
          type="email"
          data-testid="email-input"
          placeholder="Email: xp@xp.com"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
        <input
          className="inputPassword"
          name="password"
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
        <button
          className="buttonLogin"
          data-testid="login-submit-btn"
          type="button"
          onClick={ handleSubmit }
          disabled={ isDisabled }
        >
          Acessar
        </button>
      </form>
      <Footer/>
    </div>
  );
}
