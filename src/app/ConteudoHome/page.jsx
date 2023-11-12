import "./home.css";
import "../../styles/geral.css";
import pedalEssencial from "../../imgs/img-title2.png";
import pedalLeve from "../../imgs/img1-title2.png";
import pedalElite from "../../imgs/img2-title2.png";
import Image from "next/image";
import bike from "../../imgs/bike.jpg";

export default function conteudoHome() {
  return (
    <main>
      <div className="img-home">
        <div className="side-space">
          <div className="low-space">
            <h1 className="title">
              Seguro Bike da <br />
              <span className="color-text">Porto Seguro</span>
            </h1>
          </div>
          <div className="text">
            <p>
              Uma solução completa e abrangente que oferece uma ampla gama de
              serviços, garantindo proteção e segurança para que você possa se
              aventurar e explorar novas possibilidades sem nenhum receio ou
              preocupação.
            </p>
          </div>
        </div>
      </div>
        <Image className="bike" src={bike} />
      <div className="alinhamento-textos">
        <h2 className="title-1" id="texto">
          Com o Seguro Bike da Porto Seguro, é pedalar e relaxar
        </h2>

        <p className="text-1">
          O Seguro Bike é uma solução completa, que cuida não só da bicicleta e
          do ciclista, mas dos terceiros.São garantias e serviços pensados para
          cada modelo e perfil de cliente, com contratação simples e rápida, sem
          burocracia.
        </p>

        <h2 className="title-2">Conheça nossos planos de serviços</h2>

        <div className="img-adjustment">
          <div>
            <Image
              className="img-title2"
              src={pedalEssencial}
              alt="Homem mexendo na corrente da bike"
            />
            <h3 className="title-img">Pedal essencial</h3>
            <p className="text-img">
              O plano gratuito* para você experimentar um dos serviços
              essenciais oferecidos, de acordo com as suas necessidades.
            </p>
          </div>

          <div>
            <Image
              className="img-title2"
              src={pedalLeve}
              alt="Homem colocando banco da bike"
            />
            <h3 className="title-img">Pedal leve</h3>
            <p className="text-img">
              Você gosta de pedalar e está buscando um plano de serviços
              intermediário? O Pedal leve da Porto é para você.
            </p>
          </div>

          <div>
            <Image
              className="img-title2"
              src={pedalElite}
              alt="Homem mexendo no tablet ao lado da bike"
            />
            <h3 className="title-img">Pedal elite</h3>
            <p className="text-img">
              Conte com diversos serviços capazes de elevar suas aventuras para
              o próximo nível.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
