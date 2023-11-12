import "./entrar.css";
import "../../styles/geral.css";
import Link from "next/link";
import logo_porto from "../../imgs/logo-porto-azul.png";
import portinho from "../../imgs/portinho.png";
import Image from "next/image";

export default function entrar() {
  return (
    <main className="alinhamento-entrar">
      <Image className="position-img-entrar" src={portinho} alt=" Boneco porto"  quality={100}/>
      <div className="center-entrar">
        <Image src={logo_porto} alt="Logo da porto" quality={100} />

        <h1 className="title-entrar">Acessar Conta</h1>
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

         <Link href="/entrar/formulario"> <button className="edit-input-entrar-2">Entrar</button> </Link> 
        </div>
        <h2>Ainda não tem uma conta?</h2>
        <Link className="link-sign-up" href="/cadastrar">Cadastre-se agora :)</Link>
      </div>
    </main>
  );
}
