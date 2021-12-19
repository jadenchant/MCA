import React, { Component } from 'react';
import { Button, View, Text} from 'react-native';

export default class FetchExample extends Component {

    handlePress = () => {
        fetch('https://www.stolaf.edu/people/rab/mca/hello.txt')
            .then((response) => response.text())
            .then((responseText) => {
                alert("Received:  "  + responseText);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    
    render(){
        return(
            <View style={{paddingTop: 75, paddingLeft: 50 }}>
              <Text>Test of fetch in React Native</Text>
              <Button onPress={() => this.handlePress()}
                      title='Click me to see the results'/>
            </View> 
        );
    }
}
