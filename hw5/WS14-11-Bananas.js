import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

class Bananas extends Component {
  render() {
    let pic = {
      uri: this.props.url
    };
    return (
      <View style={{ flex: 1, justifyContent: "center", 
                     alignItems: "center" }}>
        <Text>{this.props.label}</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
} 

export default Bananas;