import { Component } from "react";
import batomThumb from "../../../../assets/images/batom.jpg";
import esmalteThumb from "../../../../assets/images/esmalte.jpg";
import baseThumb from "../../../../assets/images/base.jpg";
import hidratanteThumb from "../../../../assets/images/hidratante.jpg";
import "./product.css";

const storeProduct = [
  {
    nomeProduto: "Esmaltes",
    thumbnail: esmalteThumb,
    id: "esmalte",
    descrição: "Temos varios tipos de esmaltes",
  },
  {
    nomeProduto: "Batom",
    thumbnail: batomThumb,
    id: "batom",
    descrição: "Temos varios tipos de baton",
  },
  {
    nomeProduto: "Base",
    thumbnail: baseThumb,
    id: "base",
    descrição: "Temos varios tipos de base",
  },
  {
    nomeProduto: "Hidratante",
    thumbnail: hidratanteThumb,
    id: "hidratante",
    descrição: "Temos varios tipos de hidratante",
  },
];

class ProductPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onProductClick = this.onProductClick.bind(this);
  }

  onProductClick = (id) => {
    window.location.href = `/${id}`;
  };

  render() {
    return (
      <div className="product-container">
        <h1>Nossos Produtos</h1>
        <div className="product-content">
          {storeProduct.map((produto, index) => (
            <div key={index} onClick={() => this.onProductClick(produto.id)}>
              <img src={produto.thumbnail} alt={produto.nomeProduto} />
              <h1>{produto.nomeProduto}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductPreview;
