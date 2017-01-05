import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';


import {Scene, Router,Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AwesomeProject from './awesomeProject';

import Login from '../components/login'
import UserMain from '../components/userMain'
import User from '../components/user';
import MyPage from '../components/myPage'
import NavBar from '../components/navBar';
import Body from '../components/body'
import Tabs from '../components/tabs';
import ButtonGroup from '../components/buttonGroup';



const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root"  hideNavBar hideTabBar>
            <Scene key="user" component={User} />
            <Scene key="login" component={Login} direction="vertical"/>
            <Scene key="userMain" component={UserMain} />
            <Scene key="myPage" component={MyPage} direction="vertical"/>
            <Scene key="awesomeProject" component={AwesomeProject} initial={true} />
            <Scene key="tabs" component={Tabs} />
            <Scene key="buttonGroup" component={ButtonGroup} />
            <Scene key="navBar" component={NavBar} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
