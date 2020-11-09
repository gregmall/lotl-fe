import React from 'react';
import AddCharacter from './character/addCharacter';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import CharacterList from './character/CharacterList';
import Detail from '../detail/Detail';
import UpdateCharacter from './character/UpdateCharacter';
import { Provider } from 'react-redux';
import store from '../../store';


export default function App() {
  return (
   <div>
     <Provider store ={store}>
     <Router>
      
       <Switch>
        <Route exact path ="/" component = {CharacterList} />
        <Route exact path ="/detail/:id" component = {Detail}/>
        <Route exact path ="/update/:id" component = {UpdateCharacter}/>
        
        </Switch>
      </Router>
      </Provider>
    </div>
  );
}
