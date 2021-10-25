import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Service from './components/Service';
import Teams from './components/Teams';
import PageNotFound from './components/404';

function App() {
  return (
    <>
      <Router>
         <Header/>
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/service"><Service /></Route>
          <Route path="/team"><Teams /></Route>
          <Route path="*"><PageNotFound/></Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
