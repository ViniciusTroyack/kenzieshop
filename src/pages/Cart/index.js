import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Product from "../../components/Product";
import './styles.css'

const Cart = () => {

    const cart = useSelector(store => store.cart)

    return (
        <div className='cartDiv'>
            <h1>Carrinho de compras</h1>
            {cart.map(product => <Product key={product.id} product={product} isRemovable />)}
        </div>
    )
}

export default Cart;