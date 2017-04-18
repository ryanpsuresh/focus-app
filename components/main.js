import React from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { StackNavigator } from 'react-navigation';

const locationData = {
  '0': [require('../assets/whitenoise1.jpg'), 'white.mp3', 'White Noise'],
  '1': [require('../assets/brownnoise.jpg'), 'brown.mp3', 'Brown Noise'],
  '2': [require('../assets/pinknoise.jpg'), 'pink.mp3', 'Pink Noise'],
  '3': [require('../assets/rain.jpg'), 'rain.mp3', 'Relaxing Rain'],
  '4': [require('../assets/rainforest1.jpg'), 'rainforest.mp3', 'Forest'],
  '5': [require('../assets/beach.jpg'), 'beach.mp3', 'Beach'],
  '6': [require('../assets/campfire.jpg'), 'campfire.mp3', 'Camp Fire'],
  '7': [require('../assets/runningwater.jpg'), 'runningwater.mp3', 'Running Water'],
  '8': [require('../assets/rainstorm.jpg'), 'rainstorm.mp3', 'Rain Storm']
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
        'White Noise', 'Brown Noise', 'Pink Noise', 'Relaxing Rain', 'Forest', 'Beach', 'Camp Fire', 'Running Water', 'Rain Storm'
      ])
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
              onPress = {() => navigate('MediaPlayer', {sound: locationData[rowID][1], background: locationData[rowID][0]})}
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
    fontFamily: 'Courier New', 
    backgroundColor: 'transparent', 
    fontWeight: 'bold', 
    fontSize: 22, 
    color: 'white'
  }
});