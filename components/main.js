import React from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { StackNavigator } from 'react-navigation';

const locationData = {
  '0': [require('../assets/whitenoise1.jpg'), 'white.mp3'],
  '1': [require('../assets/brownnoise.jpg'), 'https://www.google.com/maps/@-13.1640352,-72.5449358,3a,90y,0.69h,76.11t/data=!3m6!1e1!3m4!1sshqpOcVdDrWDJrlbJTiTfg!2e0!7i13312!8i6656'],
  '2': [require('../assets/pinknoise.jpg'), 'https://www.google.com/maps/about/behind-the-scenes/streetview/treks/petra/'],
  '3': [require('../assets/rain.jpg'), 'https://www.google.com/maps/place/Great+Wall+of+China/@40.4318996,116.56842,555m/data=!3m1!1e3!4m5!3m4!1s0x35f121d7687f2ccf:0xd040259b950522df!8m2!3d40.4319077!4d116.5703749'],
  '4': [require('../assets/rainforest1.jpg'), 'https://www.instantstreetview.com/@-22.951091,-43.209451,260.58h,21.17p,0.67z,jJenQAQedVwAAAQvO6M-Hw'],
  '5': [require('../assets/cancun.jpg'), 'https://www.google.com/maps/uv?hl=en&pb=!1s0x8f5138c6e391c0e7:0x7c1ea0a168994d9a!2m19!2m2!1i80!2i80!3m1!2i20!16m13!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!3m1!7e115!4s/maps/place/chichen%2Bitza%2Bgoogle%2Bmaps/@20.6828739,-88.5680857,3a,75y,259.4h,90t/data%3D*213m4*211e1*213m2*211spvkFEJz1z6--L2-bVXunHw*212e0*214m2*213m1*211s0x0:0x7c1ea0a168994d9a!5schichen+itza+google+maps+-+Google+Search&imagekey=!1e2!2spvkFEJz1z6--L2-bVXunHw&sa=X&ved=0ahUKEwiK7t_5uO3SAhUD52MKHStMBOcQpx8IdzAO'],
  '6': [require('../assets/rome.jpg'), 'https://www.instantstreetview.com/@41.889962,12.492078,24.56h,5p,1z']
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
        'White Noise', 'Brown Noise', 'Pink Noise', 'Relaxing Rain', 'Forest Sounds', 'Chichen Itza', 'The Colosseum'
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