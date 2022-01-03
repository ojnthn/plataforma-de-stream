export interface ICategoria {
  slug: string;
  title: string;
  itens: ITitulo[];
}

export interface ITitulo {
  id: number;
  name: string;
  poster_path: string;
}

export interface IDestaque {}
