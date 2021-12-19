import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

export default function Bananas(props) {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{ flex: 1, justifyContent: "center", 
                     alignItems: "center" }}>
        <Text>My picture</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
}
