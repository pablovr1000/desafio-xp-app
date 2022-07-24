import React, { useContext, useState } from 'react';
import xpContext from '../context/xpContext';

export default function SwingTrade() {
  const { userData, titulosUser, titulosGeral } = useContext(xpContext);
  const [tradeInfo, setTradeInfo] = useState(true);

  const handleClickCompra = () => {
    console.log('clicou');
  };

  const handleClickVenda = () => {
    console.log('clicou');
  };
  return (
    <div className="containerConta">
      <form className="formSwingTrade">
        <h3>Comprar/Vender Ação:</h3>
        <div className="tradeHeader">
          <span className="tradeHeaderAcao">Ação</span>
          <span className="tradeHeaderQtde">Qtde</span>
          <span className="tradeHeaderValor">"Valor R$</span>
        </div>
        <div className="tradeInfo">
          <select className="tradeInfo">
            {
              tradeInfo === true ? titulosUser.map((asset) =>{
                <>
                <option
                  value={asset.titulo}
                >{asset.titulo}
                </option>
                <label>{asset.amout}</label>
                </>
              })
              :
              titulosGeral.map((asset) =>{
                <option
                  value={asset.titulo}
                >{asset.titulo}
                </option>
              })
            }        
          </select>
          <span className="titulo">99</span>
          <span className="titulo">32,65</span>
        </div>
        <div className="tradeActions">
          <button
            className="buttonCompra"
            data-testid="trade-compra"
            type="button"
            onClick={ handleClickCompra }
            disabled=""
          >
            Comprar
          </button>
          <button
            className="buttonVenda"
            data-testid="trade-venda"
            type="button"
            onClick={ handleClickVenda }
            disabled="true"
          >
            Vender
          </button>
          <input
            className="tituloQtde"
            name="tituloQtde"
            type="integer"
            data-testid="titulo-qtde"
            placeholder="Informe a Quantidade de 1 à 99"
          />
          <input
            className="tituloValor"
            name="tituloValor"
            type="float"
            data-testid="titulo-valor"
            placeholder="Informa o Valor"
          />
          <button
            className="buttonReturn"
            data-testid="trade-return"
            type="button"
          >
            Voltar
          </button>
          <button
            className="buttonConfirm"
            data-testid="trade-confirm"
            type="button"
            disabled="false"
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
}
