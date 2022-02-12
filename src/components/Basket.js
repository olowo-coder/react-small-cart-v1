import React from 'react'

const Basket = (props) => {
    const {cartItems, onAdd, onRemove, addProduct} = props;
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0: 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    let arrCart = [];
    var myMap = new Map();
    cartItems.map((item) => (
        myMap.set(item.id, item.qty)
    ));
    let obj = {};
    myMap.forEach(function(value, key){
        obj[key] = value
    });

    console.log(obj);

  return (
    <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
        {cartItems.map((item) => (
            
            <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                    <button onClick={() => onAdd(item)} className="add">+</button>
                    <button onClick={() => onRemove(item)} className="remove">-</button>
                </div>
                <div className="col-2 text-right">
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
            </div>
           
        ))}
       
        {cartItems.length !== 0 && (
            <>
            <hr></hr>
            <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className="col-2">Tax Price</div>
                <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className="col-2">Shipping Price</div>
                <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className="col-2"><strong>Total Price</strong></div>
                <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
            </div>
            <button  onClick={() => addProduct(obj)} className="check">Proceed to Check Out</button>
            </>
        )}
    </aside>
  )
}

export default Basket