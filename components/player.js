import React from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome'
import Sound from 'react-native-sound';

export class MediaPlayer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isPlaying: true,
      sound: new Sound('white.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        } 
        // loaded successfully
        this.state.sound.play();
      })
    }
  }

  componentWillMount() {
    // Loop indefinitely until stop() is called
    this.state.sound.setNumberOfLoops(-1);
  }

  render() {
    return (
    <View style={styles.background}>
      <View>
        <Icon.Button 
          name = 'play'
          color = 'black'
          onPress={() => {
            if(this.state.isPlaying) {
              this.state.isPlaying = false;
              this.state.sound.pause();
            }
            else {
              this.state.isPlaying = true;
              this.state.sound.play();
            }
           }
          }
        >
        </Icon.Button>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'blue'
  }
});