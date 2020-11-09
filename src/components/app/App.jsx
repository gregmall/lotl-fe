import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import CharacterList from '../character/CharacterList';
import Detail from '../detail/Detail';
import UpdateCharacter from '../character/UpdateCharacter';
import { Provider } from 'react-redux';
import store from '../../store';
import styles from './App.css'


export default function App() {
  return (
   <div className = {styles.App}>
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
