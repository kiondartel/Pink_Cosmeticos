import { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Items from "../../components/items";
import "./category.css";
import { fetchAndSetItems } from "../../actions/itens_actions";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  componentDidUpdate() {}
  render() {
    const { categories, categoryName, itens } = this.props;

    const selectedCategory = categories.find(
      (category) => category.id === categoryName
    );

    const selectedItems = itens.data.filter(
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
        <div className="parent-container">
          {selectedItems.map((items) => (
            <Items key={items.id} {...items} />
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

const mapDispatchToProps = (dispatch) => ({
  fetchItems: () => dispatch(fetchAndSetItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
