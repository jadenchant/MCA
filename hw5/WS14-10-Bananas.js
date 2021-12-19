import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

function Bananas(props) {
  let pic = {
    uri: props.url
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", 
                   alignItems: "center" }}>
      <Text>{props.label}</Text>
      <Image source={pic} style={{width: 193, height: 110}}/>
    </View>
  );
} 

export default Bananas;