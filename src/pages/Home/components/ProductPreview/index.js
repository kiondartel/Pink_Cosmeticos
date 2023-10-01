import { Component } from "react";
import "./product.css";
import { connect } from "react-redux";

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
    const { categories } = this.props;
    return (
      <div className="product-container">
        <h1>Nossos Produtos</h1>
        <div className="product-content">
          {categories.map((produto, index) => (
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

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(ProductPreview);
