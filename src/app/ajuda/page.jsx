import "./ajuda.css";
import "../../styles/geral.css";
import solicitar_ajuda from "../../imgs/solicitar-ajuda.png";
import reembolso from "../../imgs/reembolso.png";
import dados_pessoais from "../../imgs/dados-pessoais.png";
import apolices from "../../imgs/apolices.png";
import boleto from "../../imgs/boleto.png";
import fatura from "../../imgs/fatura.png";
import beneficios from "../../imgs/beneficios.png";
import sinistro from "../../imgs/sinistro.png";
import Image from "next/image";

export default function ajuda() {
  return (
    <main>
      <h2 className="help">Como podemos te ajudar?</h2>
      <div className="center-search">
        <input
          className="search-help"
          type="text"
          name="ajuda"
          id="idajuda"
          placeholder="Olá, pesquise aqui o que você precisa!"
        />
      </div>
      <h1 className="title-help">Atendimento Porto:</h1>
      <div className="adjustment-cards">
        <div className="cards">
          <Image src={solicitar_ajuda} alt="Mulher de negócios" quality={100} />
          <h3 className="center-card">SOLICITAR AJUDA</h3>
          <p>
            Pedir ajuda no site da Porto Seguro é um processo simples e
            conveniente para os clientes em situações de emergência ou
            necessidade de assistência. Ao acessar o site da Porto Seguro ...
          </p>
        </div>
        <div className="cards">
          <Image src={sinistro} alt="Mulher preocupada" quality={100} />
          <h3 className="center-card">SINISTROS</h3>
          <p>
            Ao acessar a seção de sinistros no site da Porto Seguro, os clientes
            podem encontrar todas as informações sobre todos os documentos
            necessários para dar sua entrada no processo ...
          </p>
        </div>
        <div className="cards">
          <Image src={reembolso} alt="Aperto de mãos" quality={100} />
          <h3 className="center-card">REEMBOLSO</h3>
          <p>
            Para solicitar o reembolso, os clientes devem acessar a área do
            cliente no site da Porto Seguro e preencher o formulário de
            reembolso, fornecendo muitas informações relevantes, como o tipo ...
          </p>
        </div>
        <div className="cards">
          <Image
            src={beneficios}
            alt="Varias pessoas dando as mãos"
            quality={100}
          />
          <h3 className="center-card">BENEFÍCIOS</h3>
          <p>
            A Porto Seguro é uma empresa brasileira que oferece uma variedade de
            serviços e benefícios por meio do seu site. Abaixo estão alguns dos
            benefícios que você pode encontrar ...
          </p>
        </div>
        <div className="cards">
          <Image src={apolices} alt="Casal de idosos" quality={100} />
          <h3 className="center-card">APÓLICES</h3>
          <p>
            As apólices são contratos de seguro oferecidos pela Porto Seguro.
            Com elas é possivel estabelecem os termos e condições do seu seguro,
            sempre incluindo coberturas, exclusões ...
          </p>
        </div>
        <div className="cards">
          <Image src={fatura} alt="Contas" quality={100} />
          <h3 className="center-card">2ª VIA FATURA</h3>
          <p>
            A Porto Seguro é uma seguradora e instituição financeira que oferece
            diversos serviços, incluindo o pagamento de faturas online. Para
            obter a segunda via de uma ...
          </p>
        </div>
        <div className="cards">
          <Image src={dados_pessoais} alt="Notebook" quality={100} />
          <h3 className="center-card">DADOS PESSOAIS</h3>
          <p>
            A Porto Seguro é uma empresa que valoriza a proteção de dados
            pessoais de seus clientes. Verifique aqui como tratamos todos os
            seus dados e como você pode encontrar-los na ...
          </p>
        </div>
        <div className="cards">
          <Image src={boleto} alt="Boletos para pagar" quality={100} />
          <h3 className="center-card">2ª VIA BOLETO</h3>
          <p>
            A Porto Seguro oferece a opção de emissão da segunda via de boleto
            através do seu site. Esse recurso permite aos clientes acessarem
            facilmente suas faturas e efetuarem ...
          </p>
        </div>
      </div>
    </main>
  );
}
