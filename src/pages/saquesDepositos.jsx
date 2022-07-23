import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
/* import { useHistory } from 'react-router-dom'; */

export default function Motimentacao() {
  return (
    <div className="containerConta">
      <Header/>
      <form className="formMovimentacao">
        <div className="salvoInfo">
          <span className="saldo">Saldo em Conta: </span>
          <span className="saldoValor" data-testid="saldo">R$ 5.000,00</span>
        </div>
        <div className="operacao">
          <button
            className="deposito"
            data-testid="deposito-btn"
            type="button"
            /* disabled={ isDisabled } */
          >
            Enter
          </button>
          <input
          className="valorOperacaoConta"
          name="valorOperacaoConta"
          data-testid="valorOperacaoConta"
          />
        </div>
      </form>
      <Footer/>
    </div>
  );
}
