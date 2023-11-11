import React from "react";
import Image from "next/image";
import "./Footer.css";
import logo_porto from "../imgs/logo-porto.png";
import insta from "../imgs/instagram.png";
import linkedin from "../imgs/linkedin.png";
import youtube from "../imgs/youtube.png";
import twitter from "../imgs/twitter.png";
import tiktok from "../imgs/tiktok.png";
import facebook from "../imgs/facebook.png";
import portinho2 from "../imgs/portinho2.png";

function Footer() {
  return (
    <footer className="footer-content">
      <div className="footer-adjustment">
        <ul>
          <h2 className="ajuste-espaços">Links Rápidos</h2>
          <li>Perguntas Frequentes</li>
          <li>SAC e Telefones</li>
          <li>WhatsApp</li>
          <li>Endereços</li>
        </ul>

        <ul>
          <h2 className="ajuste-espaços">Sobre a Porto</h2>
          <li>Quem somos</li>
          <li>Nossa História</li>
          <li>Notícias e imprensa</li>
          <li>Sustentabilidade</li>
        </ul>
        <div className="div-adjustment">
          <Image
            className="img-adjustment-footer"
            src={logo_porto}
            alt="Logo porto"
          />
          <h2>Acompanhe a porto nas redes sociais:</h2>

          <div className="espaço-icones">
            <a href="https://www.facebook.com/porto" target="_blank">
              <Image className="icon-footer" src={facebook} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/porto" target="_blank">
              <Image className="icon-footer" src={insta} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/company/porto/" target="_blank">
              <Image className="icon-footer" src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.youtube.com/portoseguro" target="_blank">
              <Image className="icon-footer" src={youtube} alt="youtube" />
            </a>
            <a href="https://twitter.com/portoseguro" target="_blank">
              <Image className="icon-footer" src={twitter} alt="twitter" />
            </a>
            <a href="https://www.tiktok.com/@portoseguro" target="_blank">
              <Image className="icon-footer" src={tiktok} alt="tiktok" />
            </a>
          </div>
        </div>
      </div>
        <div className="ajuste-portinho2">
          <Image className="portinho2" src={portinho2} />
        </div>
      
    </footer>
  );
}
export default Footer;
