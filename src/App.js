import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Drafted from './components/Drafted';
import Default from './components/Default';
import UnDrafted from './components/UnDrafted';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Drafted}></Route>
        <Route path="/drafted" component={Drafted}></Route>
        <Route path="/undrafted" component={UnDrafted}></Route>
        <Route component={Default}></Route>
      </Switch>
    </Router>
  );
}

export default App;
