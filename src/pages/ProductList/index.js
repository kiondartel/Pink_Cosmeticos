import { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import "./products.css";
class ProductList extends Component {
  render() {
    const { categories, categoryName, itens } = this.props;

    const selectedCategory = categories.find(
      (category) => category.id === categoryName
    );

    const selectedItens = itens.filter(
      (item) => item.categoria === categoryName
    );
    return (
      <>
        <NavBar />
        <Header
          title={selectedCategory.nomeProduto}
          description={selectedCategory.descricao}
          image={selectedCategory.thumbnail}
        />
        <div className="itens-container">
          {selectedItens.map((itens) => (
            <div key={itens.id}>
              <h1>{itens.titulo}</h1>
              <img src={itens.foto} alt={itens.titulo} />
              <p>{itens.descricao}</p>
              <div className="buy-container">
                <h3>R${itens.preco}</h3>
                <button>Comprar</button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  itens: state.itens,
  categories: state.categories,
});

export default connect(mapStateToProps)(ProductList);
