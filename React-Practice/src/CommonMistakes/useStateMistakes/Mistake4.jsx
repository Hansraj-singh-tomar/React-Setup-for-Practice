import React, {useState} from 'react'
import './mistake4.css'
const Mistake4 = () => {

    // The error is after choosing product clicking on plus button the quantity of product must be 
    // update at a time  

    const [products, setProducts] = useState([
        {id: 1, title: "black sneakers", quantity: 1},
        {id: 2, title: "red-shirt", quantity: 1},
        {id: 3, title: "blue jeans", quantity: 1}
    ]);

    // const [selectedProduct, setSelectedProduct] = useState({});
    const [selectedId, setSelectedId] = useState(null);


    // this is a solution of error part
    const selectedProduct = products.find((p) => p.id === selectedId);

    const increment = (id) => {
        setProducts((prev) => {
            return prev.map((product) => {
                if(product.id === id){
                    return { ...product, quantity: product.quantity + 1 }
                } else {
                    return product
                }
            })
        })
    }

    const handleChoose = (id) => {
        // const product = products.find((p) => p.id === id);
        // console.log(product);
        // setSelectedProduct(product); 

        // this is a solution of error part  
        setSelectedId(id)
    };

  return (
    <div className='container'>
        <h1>All Products</h1>
        {products.map((product) => {
            return (
                <div key={product.id} className="parentDiv">
                    <span className='child1'>
                        {product.title}
                        <button style={{margin: "10px"}} onClick={() => handleChoose(product.id)}>choose</button>
                    </span>
                    <div className='child2'>
                        <button style={{margin: "10px"}}>-</button>
                        <span>{product.quantity}</span>
                        <button style={{margin: "10px"}} onClick={() => increment(product.id)}>+</button>
                    </div>
                </div>
            )
        })}

        <h4>Selected Product</h4>
        <span>{selectedProduct?.title}</span>
        <span style={{margin: "10px"}}>{selectedProduct?.quantity}</span>
    </div>
  )
}

export default Mistake4