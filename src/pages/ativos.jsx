import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { titulos } from '../data/titulos';
import xpContext from '../context/xpContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Ativos.css'

export default function Ativos() {
  const { userData, titulosUser, titulosGeral, setTitulosUser, setTitulosGeral } = useContext(xpContext);
  const [compraVenda, setCompraVenda] = useState(false);
  const [assetView, setAssetView] = useState(true);
  const [assetAmount, setAssetAmount] = useState();
  const [assetValue, setAssetValue] = useState();
  const [assetInNegociation, setAssetInNegociation] = useState({});

  useEffect(() => {
    const ativosUser = userData.ativos;
    const ativosNoUser = titulos;
    if (ativosUser) {
      setTitulosUser(ativosNoUser.reduce((acc, curr) => {
        const asset = ativosUser.find((element) => Object.values(element)[0] === Object.values(curr)[0]);
        if (asset && Object.values(asset)[4] > 0) {
          acc.push(asset)
          return acc;
        } else {
          return acc;
        }
      }, [])
      );

      setTitulosGeral(ativosNoUser.reduce((acc, curr) => {
        const asset = ativosUser.find((element)=> Object.values(element)[0] === Object.values(curr)[0])
        if(asset && Object.values(asset)[4] > 0) {
          if (Object.values(curr)[0] === Object.values(asset)[0]) {
            return acc;
          }
        } else {
          acc.push(curr);
          return acc;
        }
      }, [])
      );
    }
  }, []);

  const handleClickCompra = (value) => {
    setCompraVenda(true);
    setAssetView(false);
    const value2 = parseInt(value);
    var asset = titulosUser.find((element) => Object.values(element)[0] === value2);
    if (!asset) asset = titulosGeral.find((element) => Object.values(element)[0] === value2);
    setAssetInNegociation(asset);
  };

  const handleClickVenda = (value) => {
    setCompraVenda(true);
    setAssetView(false);
    const value2 = parseInt(value);
    var asset = titulosUser.find((element) => Object.values(element)[0] === value2);
    if (!asset) asset = titulosGeral.find((element) => Object.values(element)[0] === value2);
    setAssetInNegociation(asset);
  };

  const handleTrade = () => {
    setAssetView(true);
    setCompraVenda(false);
    if(assetInNegociation.amount !== 0) {
      
    }
    setAssetAmount();
    setAssetValue();
    setAssetInNegociation({});

  };

  return (
    <div>
      <div>
      <Header/>
      { assetView === true ? 
        <div className="containerAtivos">
          <div className="formMeusAtivos">
            <h3>Minhas Ações</h3>
            <table className="table">
              <tr className="formMeusAtivos">
                <label className="label">Ação </label>
                <label className="label">Qtde </label>
                <label className="label">Preço </label>
                {
                  titulosUser.map((asset)=> (
                    <div>
                      <td className="td2">{asset.titulo}</td>
                      <td className="td2">{asset.amount}</td>
                      <td className="td2">{asset.valor}</td>
                      <td className="td2">
                        <button
                          className="buttonCompraN"
                          data-testid={`trade-compra-${asset.index}`}
                          type="button"
                          value={asset.index}
                          onClick={ ({ target: { value } }) => handleClickCompra(value) }
                        >
                          C
                        </button>
                      </td>
                      <td className="td2">  
                        <button
                          className="buttonVendaN"
                          data-testid={`trade-venda-${asset.index}`}
                          type="button"
                          value={asset.index}
                          onClick={ ({ target: { value } }) => handleClickVenda(value) }
                        >
                          V
                        </button>
                      </td>
                    </div>
                  ))
                }
              </tr>
            </table>
          </div>
          <div className="formAtivosInvest">
            <h3>Disponíveis para Investir</h3>
            {
              titulosGeral.map((asset)=> (
                <tr className="formAtivosInvest">
                  <td className="td">{asset.titulo}</td>
                  <td className="td">{asset.valor}</td>
                  <td className="td">
                    <button
                      className="buttonCompraN"
                      data-testid="trade-compra-n"
                      type="button"
                      value={asset.index}
                      onClick={ ({ target: { value } }) => handleClickCompra(value) }
                    >
                      C
                    </button>
                  </td>
                </tr>
              ))
            }
          </div>
          <br/><br/><br/>
          <div className="salvoInfo">
            <span className="saldo">Saldo em Conta: R$ </span>
            <span className="saldoValor" data-testid="saldo">{ userData.saldoConta }</span>
          </div>
          <Link to="/movimentacao">
            <div>             
              <button
                className="buttonDepRet"
                data-testid="button-dep-ret"
                type="button"
              >
                Depósito/Retirada
              </button>
            </div>
          </Link>
        </div>
        :
        <></>
      }
        <br/>
        { compraVenda === true ? 
          <div className="market-div">
            <span>Comprar/Vender Ação</span>
            <div className="assetInNegociation">
              <div className="asset-in-div">
                <label className="asset-in-label">Ação: </label>
                <label className="asset-in-label">{ assetInNegociation.titulo }</label>
              </div>
              {
                assetInNegociation.amount === 0 ?
                  <></>
                :
                  <div className="asset-in-div">
                    <label className="asset-in-label">Posição Atual: </label>
                    <label className="asset-in-label">{ assetInNegociation.amount }</label>
                  </div>
              }
              <div className="asset-in-div">
                <label className="asset-in-label">Preço: </label>
                <label className="asset-in-label">{ assetInNegociation.valor }</label>
              </div>
            </div>
            <div>
              <label>Quantidade: </label>
              <input
                className="inputAssetAmount"
                name="inputAssetAmount"
                data-testid="password-input"
                placeholder="1 ~~ 99"
                value={ assetAmount }
                onChange={ ({ target: { value } }) => setAssetAmount(value) }
              />
            </div>
            <div>
              <label>Valor R$: </label>
              <input
                className="inputAssetValue"
                name="inputAssetValue"
                data-testid="password-input"
                placeholder="Informe o Valor "
                value={ assetValue }
                onChange={ ({ target: { value } }) => setAssetValue(value) }
              />
            </div>
            <div>
              <button
                className="buttonCompraN"
                data-testid="trade-compra-n"
                type="button"
                onClick={ handleTrade }
              >
                Confirmar
              </button>
            </div>
            <div>
              <button
                className="buttonCompraN"
                data-testid="trade-compra-n"
                type="button"
                onClick={ () => {
                  setAssetView(true);
                  setCompraVenda(false);
                  setAssetInNegociation({});
                } }
              >
                Voltar
              </button>
            </div>
          </div>
          :
          <></>
        }
      </div>
      <Footer/>
    </div>
  );
}
