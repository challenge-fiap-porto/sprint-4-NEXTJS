import "../../styles/geral.css";
import "./sobre.css";
import mulherGif from "../../imgs/gif-sobre.gif";
import mulherNaRocha from "../../imgs/contemplating.gif";
import Image from "next/image";

export default function sobreNos() {
  return (
    <>
      <main>
        <h1 className="title-about">
          Nosso propósito é ser
          <br />
          <span className="text-about-size">
            um porto seguro para as pessoas{" "}
          </span>
        </h1>
        <div className="aligning-photo-about">
          <p className="text-about">
            Com uma ampla gama de seguros, incluindo automóveis, residenciais,
            empresariais, vida, saúde e diversos outros ramos, a Porto Seguro
            tem como objetivo principal garantir a tranquilidade e segurança dos
            seus segurados. Além disso, a empresa também oferece serviços
            inovadores, como assistência 24 horas, consórcios, financiamentos,
            cartões de crédito e proteção para dispositivos eletrônicos.
          </p>

          <Image
            className="position-img-about"
            src={mulherGif}
            alt="Gif de mulher pulando"
          />
        </div>
        <div class="line"></div>

        <h1 className="title-about" id="title-about-position">
            A companhia com você <br />
            <span className="text-about-size">
              em todos os momentos da vida
            </span>
          </h1>
        <div className="aligning-photo-about">
          <Image className="position-img-about-2" src={mulherNaRocha} alt="Mulher sentada em uma rocha" />

          <p className="text-about" id="text-about-position">
            A Porto é mais do que uma seguradora: é um ecossistema com todas as
            soluções para transformar sonhos em realidades diárias. Com mais de
            75 anos de mercado, possui hoje três verticais de negócios: Porto
            Seguros, Porto Saúde e Porto Seguro Bank, formando, assim, um
            conjunto de soluções de proteção para os seus momentos que vão desde
            o dia a dia até o grande dia.
          </p>
        </div>
      </main>
    </>
  );
}
