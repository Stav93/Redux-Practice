import { Route } from "react-router-dom"
import Welcome from "./Welcome"
import Products from "./Products"

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/products">
        <Products/>
      </Route>
    </div>
  );
}

export default App;
