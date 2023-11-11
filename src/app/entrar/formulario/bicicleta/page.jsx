import "./formulario2.css";
import "../formulario.css";
import Link from "next/link";

export default function bicicleta() {
  return (
    <main>
      <div className="container-form2">
        <h1>Formulário - Passo 2</h1>
        <form>
          <div className="ajuste-form">
            <h2>Bicicleta:</h2>
            <label>Número de Série</label> 
            <input type="number" /> 
            <label>Ano de Fábricação</label> 
            <input type="number" />
            <label>Modelo</label> 
            <input type="text" /> 
            <label>Cor</label> 
            <input type="color" /> 
            <label>Possui Avarias</label> 
            <select name="avarias">
              <option value="">Sua bike possui alguma avaria?</option>  
              <option value="sim">Sim</option>  
              <option value="nao">Não</option>
            </select>{" "}
            <br />
            <label>
              {" "}
              Upload de Fotos{" "}
              <span>
                obs: crie uma pasta com todas as fotos da bike para análise
              </span>
            </label>{" "}
            <br />
            <input type="file" />
            <div className="aling-button">
              <button value="submit">Enviar</button>
              <Link href="/entrar/formulario">
                <button value="submit">Voltar</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
