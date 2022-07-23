import React from 'react';
/* import { useHistory } from 'react-router-dom'; */

export default function Ativos() {
  return (
    <div className="containerAtivos">
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
      </form>
    </div>
  );
}
