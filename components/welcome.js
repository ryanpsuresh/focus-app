import React from 'react';
import Button from 'apsl-react-native-button';
import { StackNavigator } from 'react-navigation';
import { Text, View, StyleSheet, Image } from 'react-native';

const images = {
  'world5': require('../assets/giphy12.jpg')
}

export class Welcome extends React.Component {
  static navigationOptions = {
    header: {
      style: { position: 'absolute' },
    }
  };
  render() {
    const { navigate } = this.props.navigation; 
    return (
       <View style={{flex: 1}}>
        <Image
          source={images.world5}
          resizeMode='cover'
          style={styles.container}
        >
          <View style={styles.titleContianer}>
            <Text style={styles.title}>
              iPhocus
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>
              Improve your focus by listening to sounds scientifically proven to enhance your concentration
            </Text>
          </View>
          <View style={{padding: 30 }}>
            <Button
              onPress={() => navigate('Main')}
              title="Main"
              style={styles.button}
              textStyle={styles.buttonText}
              children={'Listen to Sounds'}
            />
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: null,
    height: null
  },
  titleContianer: {
    backgroundColor: 'transparent', 
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 54,
    fontWeight: '500',
    color: '#F3F3F3',
    textAlign: 'center'
  },
  infoContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 0.3
  },
  info: {
    fontSize: 34,
    fontWeight: 20,
    alignItems: 'center',
    textAlign: 'center',
    margin: 20,
    fontWeight: '100',
    color: '#F3F3F3'
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: '#EADCDC',
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#EADCDC'
  }
});