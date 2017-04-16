import React from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Button from 'apsl-react-native-button';
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
    <View style={{padding: 30 }}>
     <Button
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
      title="Main"
      style={styles.button}
      textStyle={styles.buttonText}
      children={'Start Button'}
     />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: '#EADCDC',
    padding: 10,
    borderRadius: 10
  },
});