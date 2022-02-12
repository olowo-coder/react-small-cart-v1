import './App.css';
import Header from './components/Header';
import Basket from './components/Basket';
import Main from './components/Main';
// import data from './data';
import { useState, useEffect } from 'react';



function App() {
  const API_BASE_URL = 'http://localhost:6090';
  // const { products } = data;
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) =>{
      const exist = cartItems.find(x => x.id === product.id);
      if(exist) {
        setCartItems(cartItems.map(x => x.id === product.id ? {
          ...exist, qty: exist.qty + 1} : x ));
      }else{
        setCartItems([...cartItems, {...product, qty: 1}])
      }
  }

  const onRemove = (product) =>{
    const exist = cartItems.find(x => x.id === product.id);
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }else{
      setCartItems(cartItems.map(x => x.id === product.id ? {
        ...exist, qty: exist.qty - 1} : x ));
    }
  }

  useEffect(() => {
    const getProducts = async () => {
      const productFromServer = await fetchProducts()
      setProducts(productFromServer)
    }
    getProducts()
  }, [])

  const fetchProducts = async () => {
    const res = await fetch(`${API_BASE_URL}/product/all`);
    const data = await res.json();
    console.log(data);
    return data;
  }

  const addProduct = async (mapProduct) => {
    const res = await fetch(`${API_BASE_URL}/cart/save`, {
      method: 'POST',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify(mapProduct)
    });
    const data = await res.json();
    console.log(data);
    return data;
  }

  return (
    <div className="App"> 
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} addProduct={addProduct}></Basket>
      </div>
    </div>
  );
}

export default App;
