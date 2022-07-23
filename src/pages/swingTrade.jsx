import React from 'react';
/* import { useHistory } from 'react-router-dom'; */

export default function SwingTrade() {
  return (
    <div className="containerConta">
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
    </div>
  );
}
