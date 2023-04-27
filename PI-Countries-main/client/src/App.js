import { Route, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Home, Landing, Form, Detail } from "./views/index";
import NavBar from "./components/NavBar/NavBar";
import styles from "./App.module.css";


function App() {
  const location = useLocation();

  return (
    <div className={styles.App}>
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" render={() => <Home /> } />
      <Route path="/home/:id" component={Detail} />
      <Route exact path="/create" component={Form} />
    </div>
  );
}

export default App;
