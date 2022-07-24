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

  const handleClick = () => {
    console.log('clicou');
  };

  return (
    <div className="containerAtivos">
      <Header/>
      <div className="formMeusAtivos">
        <h3>Minhas Ações</h3>
        {
          titulosUser.map((asset)=> (
            <tr className="formMeusAtivos">
              <td className="ativo">{asset.titulo}</td>
              <td className="quantidadeAtivo">{asset.amount}</td>
              <td className="valorAtivo">{asset.valor}</td>
              <td>
                <button
                  className="buttonCompraN"
                  data-testid={`trade-compra-${asset.index}`}
                  type="button"
                  onClick={ handleClick }
                >
                  C
                </button>
              </td>
              <td>  
                <button
                  className="buttonVendaN"
                  data-testid={`trade-venda-${asset.index}`}
                  type="button"
                >
                  V
                </button>
              </td>
            </tr>
          ))
        }
      </div>
      <div className="formAtivosInvest">
        <h3>Disponíveis para Investir</h3>
        {
          titulosGeral.map((asset)=> (
            <tr className="formAtivosInvest">
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
      </div>
      {/* <SwingTrade/> */}
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
