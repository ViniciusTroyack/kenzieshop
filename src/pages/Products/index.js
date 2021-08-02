import { useSelector } from "react-redux";
import Product from '../../components/Product'
import Header from "../../components/Header";
import './styles.css'

const Products = () => {

    const products = useSelector(store => store.products)

    return (
        <div className='productsDiv'>
            {products.map(product => <Product key={product.id} product={product} />)}
        </div>
    )
}

export default Products;