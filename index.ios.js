import { AppRegistry } from 'react-native';
import { Welcome } from './components/welcome.js';
import { Main } from './components/main.js';
import { StackNavigator } from 'react-navigation';

const Focus = StackNavigator({
  Home: { screen: Welcome },
  Main: { screen: Main }
})

AppRegistry.registerComponent('Focus', () => Focus);
