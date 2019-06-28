import React from 'react';
import { View, StyleSheet,Text, Image } from 'react-native';

//styles
const styles = StyleSheet.create({
  imageTeam: {
    marginTop: 2,
    width: 40,
    height: 40,
  },
  team: {
    position: 'relative',
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: '20%',
  },
  score: {
    flexDirection: 'row',
  },
  lineConectionAfter: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    position: 'absolute',
    top: 40,
    right: '-50%',
    height: 2,
    width: 100,
  },
  lineConectionBefore: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    position: 'absolute',
    top: 40,
    left: '-50%',
    height: 2,
    width: 100,
  },
  lineConectionBeforeVerticaly: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    position: 'absolute',
    top: 40,
    left: '-50%',
    height: 200,
    width: 2,
  }
})
export default (props) => (
  <View style={styles.team}>
    <Text>Equipo 1</Text>
    <View style={styles.lineConectionBefore} />
    <View style={styles.lineConectionAfter} />
    <View style={[styles.lineConectionBeforeVerticaly,{height: 80 }]} />
    <Image
      source={require('../../../assets/Dblack.png')}
      style={styles.imageTeam}
      resizeMode='contain'
    />
    <View styles={styles.score}>
      <Text>4</Text>
    </View>
  </View> 
    
)