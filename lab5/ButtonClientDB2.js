import React, { Component } from 'react';
import { Button, View, Text, TextInput} from 'react-native';

export default class ButtonClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://10.42.235.127:3001',
            formContentType: "application/x-www-form-urlencoded;charset=UTF-8", 
            name: 'hello2'
	};
    }

    handlePress = (op, method = '', params = {}) => {
        if (method != '')
            params.method = method;
        fetch(this.state.url + '/'+op, params)
            .then((response) => response.text())
            .then((responseText) => {
                alert(`
                    Sent:  op=${JSON.stringify(op)}\nparams+method=${
			JSON.stringify(params)}\n
                    Received:  ${responseText}`);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    
    render(){
        return(
            <View style={{paddingTop: 50, paddingLeft: 50 }}>
              <Text>Test Program 2 for Button Server with Database</Text>
              {/* Comment: The empty View below is for vertical spacing */}
              <View style={{padding: 10}}/>   
              <Text>URL of server:</Text>
              <View style={{margin: 5, paddingLeft: 10,
                            borderStyle: 'solid', borderWidth: 2, }}>
                <TextInput
                  style={{height: 40}}
                  placeholder="URL of server"
                  onChangeText={(url) => this.setState({url})}
                  value={this.state.url}
                />
              </View>
              <View style={{padding: 10}}/>
              
              {/* RETRIEVE count */}
	      <Button onPress={() => this.handlePress('count', 'GET')}
	              color='green' title='Click to see value of count'/>
              
              {/* UPDATE count */}
              <Button onPress={() => this.handlePress('count', 'POST')}
                      color='green' title='Click to increment count'/>

              {/* UPDATE - reset count */}
              <Button onPress={() => this.handlePress('count/reset', 'PUT')}
                      color='green' title='Click to reset count to 0'/>

              <View style={{padding: 10}}/>

              {/* RETRIEVE names */}
              <Button onPress={() => this.handlePress('names','GET')} 
                      title='Click to see the value of names'/>

	      {/* entry for new name */}
              <Text>Enter a name:</Text>
              <View style={{margin: 5, paddingLeft: 10,
                            borderStyle: 'solid', borderWidth: 2, }}>
                <TextInput
                  style={{height: 40}}
                  placeholder="Name to add"
                  onChangeText={(name) => this.setState({name})}
                  value={this.state.name}
                />
	      </View>
              
              {/* CREATE a name */} 
              <Button onPress={() => this.handlePress('names', 'POST', {
                  headers: {
		      "Content-type": this.state.formContentType
		  }, 
		  body: `name=${this.state.name}`
              }
                                                     )}
                      title='Click to add new name'/>

              {/* DELETE a name */} 
              <Button onPress={() => this.handlePress('names', 'DELETE', {
                  headers: {
		      "Content-type": this.state.formContentType
		  }, 
		  body: `name=${this.state.name}`
              }
                                                     )}
                      title='Click to delete all matching names'/>

            </View> 
        );
    }
}

