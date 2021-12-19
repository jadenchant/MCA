import React, { Component } from 'react';
import { Button, View, Text, ScrollView} from 'react-native';

export default class FetchExample2 extends Component {

    constructor(props) {
        super(props);
        this.state = { content: 'xxx' };
    }

    handlePress = () => {
        fetch('https://www.stolaf.edu/people/rab/appts.html')
            .then((response) => response.text())
            .then((responseText) => {
							  this.setState({content: responseText});
                alert("Received:  "  + responseText);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    
    render(){
        return(
            <View style={{paddingTop: 50, paddingLeft: 50 }}>
              <Text>Test of fetch in React Native!</Text>
              <Button onPress={() => this.handlePress()}
                      title='Click me to see the results'/>
							<View style={{height: 500}}>
								<ScrollView>
									<Text>{this.state.content}</Text>
								</ScrollView>
							</View>
            </View> 
        );
    }
}
