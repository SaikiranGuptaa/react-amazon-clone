import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import LoginPage from './components/LoginPage';
import { auth } from './firebase';
import { useStateValue } from './Redux/StateProvider';

import Footer from './components/Footer';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //This will only run once when the app componenent loads..

    //onAuthStateChnage is used observe whether the user is signin or signout
    auth.onAuthStateChanged(authUser => {
      //console.log('The User is >>>', authUser);
    
      if(authUser){
        //The user just logged in/ The user was logged in 
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
      
      
      }else{
        //The user is loogged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <div className="App">
      <Router>
        
        <Switch>
          
          <Route path = '/login'>
             <LoginPage />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header /> 
          </Route>
          <Route path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
          
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
