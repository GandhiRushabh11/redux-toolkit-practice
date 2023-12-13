import "./App.css";
//import products from "./products.json";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/slices/productSlice";
function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  if (products.product.isLoding === true) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div className="App">
      <div>
        <button onClick={(e) => dispatch(fetchProducts())}>
          Fetch Products
        </button>
      </div>
      <Cart />
      <div className="products">
        {products.product.data &&
          products.product.data.map((product) => <Product {...product} />)}
      </div>
    </div>
  );
}

export default App;
