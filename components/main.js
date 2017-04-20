import React from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Sound from 'react-native-sound';
import { StackNavigator } from 'react-navigation';

const locationData = {
  '0': [require('../assets/beach.jpg'), 'beach.mp3', 'Beach'],
  '1': [require('../assets/brownnoise.jpg'), 'brown.mp3', 'Brown Noise'],
  '2': [require('../assets/campfire.jpg'), 'campfire.mp3', 'Camp Fire'],
  '3': [require('../assets/rainforest1.jpg'), 'rainforest.mp3', 'Forest'],
  '4': [require('../assets/night.jpg'), 'night.mp3', 'Night'],
  '5': [require('../assets/pinknoise.jpg'), 'pink.mp3', 'Pink Noise'],
  '6': [require('../assets/plane.jpg'), 'space.mp3', 'Plane'],
  '7': [require('../assets/rain.jpg'), 'rain.mp3', 'Relaxing Rain'],
  '8': [require('../assets/runningwater.jpg'), 'runningwater.mp3', 'Running Water'],
  '9': [require('../assets/rainstorm.jpg'), 'rainstorm.mp3', 'Storm'],
  '10': [require('../assets/tibetan.jpg'), 'tibetan.mp3', 'Tibetan Bowls'],
  '11': [require('../assets/train.jpg'), 'train.mp3', 'Train'],
  '12': [require('../assets/whitenoise1.jpg'), 'white.mp3', 'White Noise'],
  '13': [require('../assets/wind.jpg'), 'wind.mp3', 'Wind']
}

export class Main extends React.Component {
  static navigationOptions = {
    header: {
      title: 'Sounds'
    }
  };
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Beach', 'Brown Noise', 'Camp Fire', 'Forest', 'Night', 'Pink Noise', 'Plane', 'Rain', 'Running Water', 'Storm', 'Tibetan', 'Train', 'White Noise', 'Wind'
      ]),
      sound: ''
    };
  }
  render() {
    const { navigate } = this.props.navigation; 
    return (
      <View style={{flex: 1, paddingTop: 5, backgroundColor: 'black'}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionID, rowID) => 
            <TouchableOpacity
              onPress = {() => {
                if(this.state.sound) {
                  this.state.sound.stop();
                }
                this.setState({
                  sound: new Sound(locationData[rowID][1], Sound.MAIN_BUNDLE, (error) => {
                    if (error) {
                      console.log('failed to load the sound', error);
                      return;
                    } 
                    // loaded successfully
                    this.state.sound.setCategory('Playback');
                    this.state.sound.setNumberOfLoops(-1);
                    this.state.sound.play();
                    navigate('MediaPlayer', {sound: this.state.sound, background: locationData[rowID][0]})
                  })
                })
                }
              }
            >
              <Image source={locationData[rowID][0]} style={styles.image} resizeMode='cover'>
                <Text style={styles.text}>
                  {rowData}
                </Text>
              </Image>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex:1, 
    width: null, 
    height: 120, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 5,
  },
  text: {
    fontFamily: 'OpenSans',
    backgroundColor: 'transparent', 
    fontWeight: '600', 
    fontSize: 22, 
    color: 'white'
  }
});