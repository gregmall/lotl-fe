import React from 'react';
import AddCharacter from './character/addCharacter';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import CharacterList from './character/CharacterList';
import Detail from '../detail/Detail';


export default function App() {
  return (
   <div>
     <Router>
       <Switch>
        <Route exact path ="/" component = {CharacterList} />
        <Route exact path ="/detail/:id" component = {Detail}/>
        
        </Switch>
      </Router>
    </div>
  );
}
