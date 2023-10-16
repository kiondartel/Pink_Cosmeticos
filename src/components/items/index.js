import { Component } from "react";
import { connect } from "react-redux";
import "./items.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { bindActionCreators } from "redux";
import { changeFavorite } from "../../store/reducers/itensReducer";
import { changeShoppingCart } from "../../store/reducers/shoppingCartReducer";
class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.resolveFavorite = this.resolveFavorite.bind(this);
    this.resolveShoppingCart = this.resolveShoppingCart.bind(this);
  }
  static iconProsp = {
    color: "#041833",
    size: 30,
  };

  resolveFavorite = () => {
    const { id } = this.props;
    this.props.changeFavorite(id);
  };

  resolveShoppingCart = () => {
    const { id } = this.props;
    this.props.addShoppingCart(id);
  };

  render() {
    const { titulo, descricao, foto, preco, favorito, itemsShoppingCart, id } =
      this.props;
    console.log(favorito, "favorito");
    const haveItensOnShoppingCart = itemsShoppingCart.some(
      (iitemsShoppingCart) => itemsShoppingCart.id === id
    );
    return (
      <div className="items-container">
        <div className="icons-container">
          {favorito ? (
            <AiFillHeart
              {...Items.iconProsp}
              color="#ff0000"
              className="item-action"
              onClick={this.resolveFavorite}
            />
          ) : (
            <AiOutlineHeart
              {...Items.iconProsp}
              className="item-action"
              onClick={this.resolveFavorite}
            />
          )}
          <FaCartPlus
            {...Items.iconProsp}
            color={haveItensOnShoppingCart ? "pink" : "red"}
            className="item-action"
            onClick={this.resolveShoppingCart}
          />
        </div>
        <h1>{titulo}</h1>
        <img src={foto} alt={titulo} />
        <p>{descricao}</p>
        <div className="buy-container">
          <h3>R${preco}</h3>
          <button>Comprar</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  itemsShoppingCart: state.shoppingCart,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeFavorite,
      addShoppingCart: (id) => dispatch(changeShoppingCart(id)),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Items);
