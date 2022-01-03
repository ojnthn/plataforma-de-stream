import JSON from "../lib/JSON";

// Interfaces
import { IDestaque, ITitulo } from "../interfaces/Conteudo.interface";

const json = new JSON();

interface ITmbsParams {
  api_key: string;
  language: string;
  with_network?: number;
  with_genres?: number;
}

export default class Tmbd {
  private readonly API_KEY: string;
  private readonly API_BASE_URL: string;
  private readonly LANGUAGE: string;

  constructor() {
    this.API_KEY = "fcf6dfa2ab390dbfd38ae8185f3de12b";
    this.API_BASE_URL = "https://api.themoviedb.org/3";
    this.LANGUAGE = "pt-br";
  }

  async buscaCategoria(pr_category: string): Promise<ITitulo[]> {
    const req = await fetch(this.getURL(pr_category));
    const res = await req.json();

    return this.filtraDado(res.results);
  }

  async buscaDestaque(): Promise<IDestaque> {
    const req = await fetch(this.getURL("Originais da Netflix"));
    const res = await req.json();
    const conteudo_destaque =
      res.results[Math.floor(Math.random() * res.results.length)];

    return this.buscaDetalhe(conteudo_destaque.id, "Serie");
  }

  async buscaDetalhe(pr_conteudo_id: number, pr_type: string) {
    return {};
  }

  async filtraDado(pr_item: any): Promise<ITitulo[]> {
    let a_titulo: ITitulo[] = [];

    pr_item.map((item: any) =>
      a_titulo.push({
        id: item.id,
        name: item.name,
        poster_path: `https://image.tmdb.org/t/p/w300/${item.poster_path}`,
      })
    );

    return a_titulo;
  }

  getURL(pr_category: string): string {
    let partial_url;
    let params: ITmbsParams = {
      api_key: this.API_KEY,
      language: this.LANGUAGE,
    };

    switch (pr_category) {
      case "Originais da Netflix": {
        partial_url = `discover/tv`;
        params.with_network = 213;

        break;
      }

      case "Recomendados para você":
        partial_url = `trending/all/week`;
        break;

      case "Em alta":
        partial_url = `movie/top_rated`;
        break;

      case "Ação": {
        partial_url = `discover/movie`;
        params.with_genres = this.getGenero("Ação");

        break;
      }

      case "Comédia": {
        partial_url = `discover/movie`;
        params.with_genres = this.getGenero("Comédia");

        break;
      }

      case "Terror": {
        partial_url = `discover/movie`;
        params.with_genres = this.getGenero("Terror");

        break;
      }

      case "Romance": {
        partial_url = `discover/movie`;
        params.with_genres = this.getGenero("Romance");

        break;
      }

      case "Documentários": {
        partial_url = `discover/movie`;
        params.with_genres = this.getGenero("Documentários");

        break;
      }
    }

    return `${this.API_BASE_URL}/${partial_url}?${json.toQueryParam(params)}`;
  }

  getGenero(pr_genre: string): number {
    switch (pr_genre) {
      case "Ação":
        return 28;

      case "Comédia":
        return 35;

      case "Terror":
        return 27;

      case "Romance":
        return 10749;

      case "Documentários":
        return 99;

      default:
        return 0;
    }
  }
}
