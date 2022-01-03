import React, { useState, useEffect } from "react";

// Controllers
import Conteudo from "../../../controller/Conteudo";

// Interfaces
import { ICategoria, IDestaque } from "../../../interfaces/Conteudo.interface";

// Components
import Destaque from "./Destaque";
import Categoria from "./Categoria";

export default function Home() {
  const [listaConteudo, setListaConteudo] = useState<ICategoria[]>([]);
  const [conteudoDestaque, setConteudoDestaque] = useState<IDestaque>();

  useEffect(() => {
    const loadContent = async () => {
      let conteudo = new Conteudo();
      return {
        categoria: await conteudo.getLista(),
        destaque: await conteudo.getDestaque(),
      };
    };

    loadContent().then((pr_a_content) => {
      setListaConteudo(pr_a_content.categoria);
      setConteudoDestaque(pr_a_content.destaque);
    });
  }, []);

  return (
    <div>
      {conteudoDestaque && <Destaque />}
      <section className="lists">
        {listaConteudo.map((item, key) => (
          <Categoria key={key} titulo={item.title} itens={item.itens} />
        ))}
      </section>
    </div>
  );
}
