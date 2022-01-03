import React from "react";

import "./Categoria.css";

export default function ({ titulo, itens }: any) {
  return (
    <div className="categoria">
      <h2>{titulo}</h2>
      <div className="categoria--linha-area">
        <div className="categoria--linha">
          {itens.length > 0 &&
            itens.map((item: any, key: number) => (
              <div className="categoria--linha--item" key={key}>
                <img src={item.poster_path} height="230px" alt={item.name} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
