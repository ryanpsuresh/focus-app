import React from 'react';
import Button from 'apsl-react-native-button';
import { StackNavigator } from 'react-navigation';
import { Text, View, StyleSheet, Image } from 'react-native';

const images = {
  'world': require('../assets/giphy.gif'),
  'world2': require('../assets/giphy2.gif'),
  'world3': require('../assets/giphy3.gif'),
  'world4': require('../assets/giphy4.gif'),
  'world5': require('../assets/giphy5.gif'),
  'world6': require('../assets/giphy6.gif'),
  'world7': require('../assets/giphy7.gif'),
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
              Wonders
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>
              Discover the wonders of the world in the palm of your hand
            </Text>
          </View>
          <View style={{padding: 30 }}>
            <Button
              onPress={() => navigate('Places')}
              title="Places"
              style={styles.button}
              textStyle={styles.buttonText}
              children={'Start Button'}
            />
          </View>
        </Image>
      </View>
    );
  }
}