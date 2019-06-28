import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';

//styles
const styles = StyleSheet.create({
  parentScrollViewStyle: {
    borderWidth: 1,
    borderColor: '#D3D3D3'
  },
  childScrollViewStyle: {
    borderWidth: 1,
    borderColor: '#D3D3D3'
  },
})
export default (props) => {
  return(
  <View>
    <ScrollView maximumZoomScale="20" minimumZoomScale="20" style={styles.parentScrollViewStyle}>
      <ScrollView horizontal="20" contentContainerStyle={styles.childScrollViewStyle}>
        {props.children}
      </ScrollView>
    </ScrollView>
  </View>
  )
}