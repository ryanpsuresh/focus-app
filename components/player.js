import React from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Button from 'apsl-react-native-button';

export class MediaPlayer extends React.Component {
  render() {
    return (
    <View style={{padding: 30 }}>
     <Button
      onPress={() => {}
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