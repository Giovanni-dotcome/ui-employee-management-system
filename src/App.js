import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListComponent from './components/ListComponent';
import HomeComponent from './components/HomeComponent';
import CreateComponent from './components/CreateComponent';
import UpdateComponent from './components/UpdateComponent';
import ViewComponent from './components/ViewComponent';

function App() {
  return (
    <Router>
      <div className="app">
        <HeaderComponent />
          <div className="container">
            <Switch>
              <Route exact path="/"><HomeComponent /></Route>
              <Route exact path="/employees"><ListComponent /></Route>
              <Route exact path="/add-employee"><CreateComponent /></Route>
              <Route exact path="/update-employee/:id"><UpdateComponent /></Route>
              <Route exact path="/view-employee/:id" component= {ViewComponent} />
            </Switch>
          </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
