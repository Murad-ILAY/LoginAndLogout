import React, { useState, useEffect } from 'react'
import "../assets/css/products.css"
import {Link} from "react-router-dom"
function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="card-container">
                {
                    products.map((e, i) => (

                        <div className="card">
                            <div className="image">
                                <img src={e.image} alt="" />
                            </div>

                            <div className="text">
                                <h2>{e.title}</h2>
                                <p>{e.category}</p>
                                <h3>$ {e.price}</h3>
                                <button className='detail'><Link to={`/product/${e.id}`}>Details</Link>  </button>
                            </div>
                        </div>



                    ))
                }
            </div>

        </div>
    )
}

export default Products