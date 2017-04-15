import { AppRegistry } from 'react-native';
import { Welcome } from './components/welcome.js';
import { main } from './components/main.js';
import { StackNavigator } from 'react-navigation';

const Focus = StackNavigator({
  Home: { screen: Welcome },
  Main: { screen: main }
})

AppRegistry.registerComponent('Focus', () => Focus);
