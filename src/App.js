import styles from './App.module.css';
import Header from "./Header/Header";
import {Route, HashRouter, Switch} from 'react-router-dom';
import Home from "./Page/Home";
import Education from "./Page/Education";
import Experience from "./Page/Experience";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className={styles.App}>
      <HashRouter basename="/">      
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Education" component={Education}></Route>
          <Route path="/Experience" component={Experience}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
