import React from 'react';
import { Provider} from "react-redux";
import store from "./store";
import './App.scss';
import Home from "./views/Home/Home";
import {Authorized} from "./store/actions/authenticationAction";
import axios from 'axios'


const App = ()=> {
  (function() {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
      store.dispatch(Authorized());
    } else {
      axios.defaults.headers.common['Authorization'] = null;
    }
  })();

  // if(localStorage.getItem("token")){
  //   axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
  //    store.dispatch(Authorized())
  //  }

  return (
      <Provider store={store}>
        <Home />
      </Provider>

    );
};

export default App;
