import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Welcome from "./Welcome";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducer/reducer"

const store = createStore(reducer);

render(<Provider store={store}>
  <Welcome  />
  </Provider>, document.getElementById('root'));
