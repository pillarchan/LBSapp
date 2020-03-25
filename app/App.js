import React, {Component} from 'react';
import Launcher from './pages/Launcher';
import Main from './pages/Main';
import {createStackNavigator} from 'react-navigation';
import Interpolator from '../node_modules/react-navigation/src/views/StackView/StackViewStyleInterpolator.js';
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    Launcher,
    Main,
  },
  {
    headerMode: 'none',
    transitionConfig: () => ({
      screenInterpolator: Interpolator.forFade,
    }),
  },
);
