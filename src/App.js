import React from 'react';
import { Provider} from "react-redux";
import store from "./store";
import './App.scss';
import Home from "./views/Home/Home";
import {Authorized} from "./store/actions/authenticationAction";


const App = ()=> {

  if(sessionStorage.getItem("token")){
     store.dispatch(Authorized())
   }

  return (
      <Provider store={store}>
        <Home />
      </Provider>

    );
};

export default App;
