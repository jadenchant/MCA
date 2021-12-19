import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class List extends Component {
  state = {
    names: [
      {id: 0, name: 'Ben', color: 'red'},
      {id: 1, name: 'Susan', color: 'aqua'},
      {id: 2, name: 'Robert', color: 'blue'},
      {id: 3, name: 'Mary', color: 'purple'},
      {id: 4, name: 'Jaden', color: 'orange'}
    ]
  }

  alertItemName = (item) => {
    alert('You selected ' + item.name);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        {
          this.state.names.map((item, index) => (
            <Button
              key={item.id}
              color={item.color}
              onPress={() => this.alertItemName(item)}
              title = {item.name} />
          ))
        }
      </View>
    );
  }
}