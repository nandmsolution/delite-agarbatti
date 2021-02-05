import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import { NavBar } from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route
          exact
          path="/products/:id"
          component={(props) => (
            <Product {...props} key={window.location.pathname} />
          )}
        ></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
