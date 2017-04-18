import React from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Sound from 'react-native-sound';

export class MediaPlayer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isPlaying: true,
      sound: new Sound(this.props.navigation.state.params.sound, Sound.MAIN_BUNDLE, (error) => {
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

  componentWillUnmount() {
    this.state.sound.stop();
  }

  render() {
    return (
    <View style={styles.background}>
      <Image
        source={this.props.navigation.state.params.background}
        resizeMode='cover'
        style={styles.container}
      >
        <View>
          <Icon.Button 
            name = {this.state.isPlaying ? 'pause' : 'play'}
            color = 'black'
            size = {40}
            backgroundColor = 'transparent'
            onPress={() => {
              if(this.state.isPlaying) {
                this.setState({
                  isPlaying: false
                });
                this.state.sound.pause();
              }
              else {
                this.setState({
                  isPlaying: true
                });
                this.state.sound.play();
              }
            }
            }
          >
          </Icon.Button>
        </View>
      </Image>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null
  }
});