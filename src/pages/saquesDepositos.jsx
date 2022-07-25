import React, { useContext, useState } from 'react';
import xpContext from '../context/xpContext';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Motimentacao() {
  const { userData, setUserData } = useContext(xpContext);
  const [inputValue, setInputValue] = useState(0);

  const handleTrade = (value) => {
    var valor = userData;
    const value2 = parseInt(inputValue);
    if(value === 'retirar') {
      valor.saldoConta = valor.saldoConta-value2;
      setUserData(valor);
      setInputValue(0);
    } else {
      valor.saldoConta = valor.saldoConta+value2;
      setUserData(valor);
      setInputValue(0);
    }
  };
  return (
    <div className="containerConta">
      <Header/>
      <form className="formMovimentacao">
        <div className="salvoInfo">
          <span className="saldo">Saldo em Conta: R$ </span>
          <span className="saldoValor" data-testid="saldo">{ userData.saldoConta }</span>
        </div>
        <div className="operacao">
          <input
            className="valorOperacaoConta"
            name="valorOperacaoConta"
            data-testid="valorOperacaoConta"
            value={ inputValue }
            onChange={ ({ target: { value } }) => setInputValue(value) }
          />
        </div>
        <div>
          <button
            className="deposito"
            data-testid="deposito-btn"
            type="button"
            value="retirar"
            onClick={ ({ target: { value } }) => handleTrade(value) }
          >
            Retirar
          </button>
          <button
            className="confirmDepRet"
            data-testid="confirm-dep-ret"
            type="button"
            value="depositar"
            onClick={ ({ target: { value } }) => handleTrade(value) }
          >
            Depositar
          </button>
        </div>
      </form>
      <Link to="/ativos">
        <div>
          <button
            className="buttonReturn"
            type="button"
          >
            Voltar
          </button>
        </div>
      </Link>
      <Footer/>
    </div>
  );
}
