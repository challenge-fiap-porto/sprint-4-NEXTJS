"use client"

import ConteudoHome from "./ConteudoHome/page";
import { useState, useEffect} from "react";

export default function Home() {

  const [loja, setLoja] = useState ([])

  

  return (

    // useEffect(()=> {
    //   fetch("http://localhost:8080/Loja")
    //   .then(resp=> resp.json())
    //   .then(resp=> setLoja(resp))
    //   .catch(error=>console.log(error))
    // },[])

    <main>
      <ConteudoHome />
    </main>
  );
}
