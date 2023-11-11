import { CheckBox } from "@mui/icons-material";
import "./formulario.css";
import Link from "next/link";

export default function formulario() {
  return (
    <main>
      <div className="container-form1">
        <h1>Formulário - Passo 1</h1>

        <form>
          <div className="ajuste-form">
            <h2>Dados Pessoais:</h2>
            <label>Nome Completo</label>
            <input type="text" />
            <label>CPF</label>
            <input type="number" />
            <label>Email</label>
            <input type="email" />
            <label>Telefone</label>
            <input type="number" />
            <label>Endereço</label>
            <input type="text" />
            <label>Idade</label>
            <input type="number" />
            <label>Selecione seu Gênero</label>
            <select name="genero">
              <option value="homem">Determine qual gênero se identifica !!</option>
              <option value="homem">Homem</option>
              <option value="mulher">Mulher</option>
              <option value="nao_binario">Não Binário</option>
              <option value="nao_infromar">Não Informar</option>
            </select>
            <div className="aling-button">
              <Link href="/entrar/formulario/bicicleta">
                <button value="submit">Próximo</button>
              </Link>
            </div>
          </div>

          {/* <h2>Bicicleta:</h2>
          <label>Número de Série</label> <br />
          <input type="text" /> <br />
          <label>Ano de Fábricação</label> <br />
          <input type="text" /> <br />
          <label>Modelo</label> <br />
          <input type="text" /> <br />
          <label>Cor</label> <br />
          <input type="color" /> <br />
          <label>Possui Avarias</label> <br />
          <select name="avarias"> 
            <option value="sim">Sim</option>
            <option value="nao">Não</option> 
          </select> <br />
          <label> Upload de Fotos <span>obs: crie uma pasta com todas as fotos da bike para análise</span></label> <br />
          <input type="file"/> 
          <div className="aling-button">
          <button  value="submit">Enviar</button>
          </div> */}
        </form>
      </div>
    </main>
  );
}
