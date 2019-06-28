import React,{ Fragment } from 'react';
import { View, StyleSheet, FlatList,Text } from 'react-native';
//components 
import Team from './Team';
//styles
const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
    width: 100,
    justifyContent:'space-around',
    alignItems: 'center',
  },

})
export default (props) => {
  const renderGroups = (k) =>{
     switch (k) {
      case 0 :
        return (
          <Fragment>
            <Team/>
            <Team/>
            <Team/>
            <Team/>
            <Team/>
            <Team/>
            <Team/>
            <Team/>
          </Fragment>
        )
      case 1 :
        return (
          <Fragment>
            <Team k={1}/>
            <Team k={1}/>
            <Team k={1}/>
            <Team k={1}/>
          </Fragment>
          
        )
      case 2 :
        return (
          <Fragment>
            <Team k={2} />
            <Team k={2} />
          </Fragment>
        )
      case 3 :
        return (
          <Fragment>
            <Team k={3} winner />
          </Fragment>
        )
    }
  }
  return(
    <View style={styles.column}>
    {
      renderGroups(props.k)
    }
    </View>
  )
  
}