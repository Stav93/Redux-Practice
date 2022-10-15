import { Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Products from "./components//Products";
import ProductDetail from "./components/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
        </Route>
      <Route path="/product-detail/:productId">
        <ProductDetail />
        </Route>
        </main>
    </div>
  );
}

export default App;
