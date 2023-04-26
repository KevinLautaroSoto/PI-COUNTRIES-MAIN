import { Route, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import { Home, Landing, Form, Detail } from "./views/index";
import NavBar from "./components/NavBar/NavBar";


function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" render={() => <Home /> } />
      <Route path="/home/:id" component={Detail} />
      <Route exact path="/create" component={Form} />
    </div>
  );
}

export default App;
