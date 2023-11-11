import "./cadastrar.css";
import "../../styles/geral.css";
import { MailOutline } from "@mui/icons-material";
import portinho from "../../imgs/portinho.png";
import logo_porto from "../../imgs/logo-porto-azul.png";
import Image from "next/image";


export default function cadastrar() {
  return (
    <main>
      <Image className="position-img-cadastrar" src={portinho} alt=" Boneco porto"  quality={100}/>
      <div className="center-entrar">
        <Image src={logo_porto} alt="Logo da porto" quality={100} />

        <h1 className="title-entrar">Cadastrar Conta</h1>
        <h2>Preencha seus dados de acesso para continuar.</h2>
        <div className="inputs">
          <input
            className="edit-input-entrar"
            type="text"
            placeholder="CPF ou CNPJ"
          />
          <input
            className="edit-input-entrar"
            type="password"
            placeholder="Senha"
          />
          <button className="edit-input-entrar-2" >Cadastrar</button>
        </div>
      </div>
    </main>
  );
}
