import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'

export default function Header() {
    const history = useHistory();

    return (
        <div className='header'>
            <h1>Kenzie Shop</h1>
            <div className='divBtn'>
                <button className='navBtn' onClick={() => history.push('/')}>Produtos</button>
                <button className='navBtn' onClick={() => history.push('/cart')}>Carrinho</button>
            </div>
        </div>
    )
}
