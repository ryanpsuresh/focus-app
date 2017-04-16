import React from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Button from 'apsl-react-native-button';
import Sound from 'react-native-sound';

export class MediaPlayer extends React.Component {

  constructor(props){
    super(props);
  }

  ComponentWillMount() {

    console.log("getting in here");

    
  }

  render() {
    return (
    <View style={{padding: 30 }}>
     <Button
      onPress={() => {
        Sound.enable(true);
        Sound.setCategory('Playback');

        var whoosh = new Sound('white.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('failed to load the sound', error);
            return;
          } 
          // loaded successfully
          whoosh.play();
        });

        // Reduce the volume by half
        whoosh.setVolume(0.5);

        // Loop indefinitely until stop() is called
        whoosh.setNumberOfLoops(-1);

        // Get properties of the player instance
        console.log('volume: ' + whoosh.getVolume());
        console.log('pan: ' + whoosh.getPan());
        console.log('loops: ' + whoosh.getNumberOfLoops());

        // Seek to a specific point in seconds
        whoosh.setCurrentTime(2.5);

        console.log('button being pressed');
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