import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SwingTrade from '../components/swingTrade';
/* import { useHistory } from 'react-router-dom'; */

export default function Ativos() {
  return (
    <div className="containerAtivos">
      <Header/>
      <form className="formMeusAtivos">
        <h3>Minhas Ações</h3>
        <div className="ativosInfo">
          <span className="ativo" data-testid="ativo">XPTO</span>
          <span className="ativoDescricao">Ação XPTO</span>
        </div>
        <div className="quantidadeInfo">
          <span className="titulo">Quantidade</span>
          <span className="quantidadeAtivo" data-testid="quantidade">3</span>
        </div>
        <div className="valorInfo">
          <span className="titulo">Valor</span>
          <span className="valorAtivo" data-testid="valor">R$ 30,01</span>
        </div>
        <div className="negociarOptions">
          <button
            className="buttonCompraN"
            data-testid="trade-compra-n"
            type="button"
            disabled="false"
          >
            C
          </button>
          <button
            className="buttonVendaN"
            data-testid="trade-venda-n"
            type="button"
            disabled="false"
          >
            V
          </button>
        </div>
      </form>
      <SwingTrade/>
      <Footer/>
    </div>
  );
}
