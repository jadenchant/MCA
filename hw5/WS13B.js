import React, { Component } from 'react';
import { Button, View, Text} from 'react-native';

export default class FetchExample extends Component {

    constructor(props) {
      super(props);
      this.state = {content: 'init'};
    }

    handlePress = () => {
        fetch('https://www.stolaf.edu/people/rab/mca/hello.txt')
            .then((response) => response.text())
            .then((responseText) => this.setState({content: responseText}))
            .catch((error) => { console.error(error); });
    }
    
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Test of fetch api in React Native</Text>
              <Button onPress={() => this.handlePress()}
                      title='Click me to see the results'/>
              <Text>{this.state.content}</Text>
            </View> 
        );
    }
}

