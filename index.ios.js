import { AppRegistry } from 'react-native';
import { Welcome } from './components/welcome.js';
import { Places } from './components/places.js';
import { StackNavigator } from 'react-navigation';

const Focus = StackNavigator({
  Home: { screen: Welcome },
  Places: { screen: Places }
})

AppRegistry.registerComponent('Focus', () => Focus);
