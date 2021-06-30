import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Feature from './Components/Feature';
import { sandwichData } from './Components/Products/sandwiches';
import { dessertData } from './Components/Products/desserts';


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favorite' data={sandwichData} />
      <Feature/>
      <Products heading='Choose your favorite' data={dessertData} />
    </Router>
  );
}

export default App;
