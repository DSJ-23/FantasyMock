import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Drafted from './components/Drafted';
import Default from './components/Default';
import UnDrafted from './components/UnDrafted';
import RawData from './raw';
import { useState } from 'react';

function App() {

  let [draftedList, setDrafted] = useState([]);
  let [undraftedList, setUndrafted] = useState(RawData);

  let removeUnDraftedByPick = (pick) => {
    let drafted_player = undraftedList.filter(instance => (instance.pick === pick))[0]
    setDrafted([...draftedList, drafted_player])
    setUndrafted(undraftedList.filter(instance => (instance.pick !== pick)))
  }

  let unDraft = (pick) => {
    let undrafted_player = draftedList.filter(instance => (instance.pick === pick))[0]
    let temp_array = undraftedList
    for (let index = 0; index < temp_array.length; index++){
      if (undrafted_player.pick < temp_array[index].pick){
        temp_array.splice(index, 0, undrafted_player)
        break
      }
    }
    setUndrafted(temp_array)
    setDrafted(draftedList.filter(instance => (instance.pick !== pick)))
  }

  return (
      <Router>
        <Switch>
          <Route exact path="/"><Redirect to="/drafted"></Redirect></Route>
          <Route exact path="/drafted" component={() => <Drafted draftedList={draftedList} unDraft={unDraft}></Drafted>}></Route>
          <Route path="/undrafted" component={() => <UnDrafted undraftedList={undraftedList} removeUndrafted={removeUnDraftedByPick} ></UnDrafted>}></Route>
          <Route component={() => <UnDrafted undraftedList={undraftedList} removeUndrafted={removeUnDraftedByPick}></UnDrafted>}></Route>
        </Switch>
      </Router>
  );
}

export default App;
