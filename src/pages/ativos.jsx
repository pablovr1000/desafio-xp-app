import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { titulos } from '../data/titulos';
import xpContext from '../context/xpContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SwingTrade from '../components/swingTrade';

export default function Ativos() {
  const { userData, titulosUser, titulosGeral, setTitulosUser, setTitulosGeral } = useContext(xpContext);

  useEffect(() => {
    const ativosUser = userData.ativos;
    const ativosNoUser = titulos;
    if (ativosUser) {
      setTitulosUser(ativosNoUser.reduce((acc, curr) => {
        const asset = ativosUser.find((element) => Object.values(element)[0] === Object.values(curr)[0]);
        if (asset && Object.values(asset)[4] > 0) {
          console.log(asset);
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

  return (
    <div className="containerAtivos">
      <Header/>
      <form className="formMeusAtivos">
        <h3>Minhas Ações</h3>
        {
          titulosUser.map((asset)=> (
            <tr>
              <td className="ativo">{asset.titulo}</td><br/>
              <td className="quantidadeAtivo">{asset.amount}</td><br/>
              <td className="valorAtivo">{asset.valor}</td>
              <td>
                <button
                  className="buttonCompraN"
                  data-testid="trade-compra-n"
                  type="button"
                >
                  C
                </button>
              </td>
              <td>  
                <button
                  className="buttonVendaN"
                  data-testid="trade-venda-n"
                  type="button"
                >
                  V
                </button>
              </td>
            </tr>
          ))
        }
      </form>
      <form className="formMeusAtivos">
        <h3>Disponíveis para Investir</h3>
        {
          titulosGeral.map((asset)=> (
            <tr>
              <td className="ativo">{asset.titulo}</td>
              <td className="valorAtivo">{asset.valor}</td>
              <td>
                <button
                  className="buttonCompraN"
                  data-testid="trade-compra-n"
                  type="button"
                >
                  C
                </button>
              </td>
            </tr>
          ))
        }
        {/* <div className="ativosInfo">
          <span className="ativo" data-testid="ativo">XPTO</span>
          <span className="ativoDescricao">Ação XPTO</span>
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
            disabled
          >
            C
          </button>
        </div> */}
      </form>
      <SwingTrade/>
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
      <Footer/>
    </div>
  );
}
