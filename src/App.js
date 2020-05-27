import React, {useEffect} from 'react';
import { Provider} from "react-redux";
import store from "./store";
import './App.scss';
import Home from "./views/Home/Home";
import setAuthToken from "./utils/setAuthToken";


const App = ()=> {
  // useEffect(() => {
  //   setAuthToken()
  // },[]);


  return (
      <Provider store={store}>
        <Home />
      </Provider>

    );
};

export default App;
