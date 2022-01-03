// Services
import Tmbd from "../services/Tmbd";

// Interfaces
import { ICategoria, IDestaque } from "../interfaces/Conteudo.interface";

export default class Conteudo {
  async getLista(): Promise<ICategoria[]> {
    const conteudo = new Tmbd();

    return [
      {
        slug: "originals",
        title: "Originais da Netflix",
        itens: await conteudo.buscaCategoria("Originais da Netflix"),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        itens: await conteudo.buscaCategoria("Recomendados para você"),
      },
      {
        slug: "top_rated",
        title: "Em alta",
        itens: await conteudo.buscaCategoria("Em alta"),
      },
      {
        slug: "action",
        title: "Ação",
        itens: await conteudo.buscaCategoria("Ação"),
      },
      {
        slug: "comedy",
        title: "Comédia",
        itens: await conteudo.buscaCategoria("Comédia"),
      },
      {
        slug: "horror",
        title: "Terror",
        itens: await conteudo.buscaCategoria("Terror"),
      },
      {
        slug: "romance",
        title: "Romance",
        itens: await conteudo.buscaCategoria("Romance"),
      },
      {
        slug: "documentary",
        title: "Documentários",
        itens: await conteudo.buscaCategoria("Documentários"),
      },
    ];
  }

  async getDestaque(): Promise<IDestaque> {
    const conteudo = new Tmbd();

    return conteudo.buscaDestaque();
  }
}
