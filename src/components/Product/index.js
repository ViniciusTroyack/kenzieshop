import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";
import './styles.css'

const Product = ({ product, isRemovable = false }) => {

  const dispatch = useDispatch();
  const { id, name, price, image } = product;

  return (
    <div className='card'>
      <div className='divImg'>
        <img url={image} />
      </div>
      <p>{name}</p>
      <p>{price}</p>
      {
        isRemovable ? (
          <button className='cardBtn' onClick={() => dispatch(removeFromCartThunk(id))}>
            Remover item
          </button>
        ) : (
          <button className='cardBtn' onClick={() => dispatch(addToCartThunk(product))}>
            Comprar
          </button>
        )
      }
    </div >
  );
};

export default Product;
