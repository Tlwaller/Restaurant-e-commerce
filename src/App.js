import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./Components/Hero";
import Routes from "./routes";


function App() {
  return (
    <Router>
      <GlobalStyle/>
      {Routes}
    </Router>
  );
}

export default App;
