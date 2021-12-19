import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class List extends Component {
  state = {
    names: [
      {id: 0, name: 'Ben'},
      {id: 1, name: 'Susan'},
      {id: 2, name: 'Robert'},
      {id: 3, name: 'Mary'}
    ]
  }

  alertItemName = (item) => {
    alert(item.name);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        {
          this.state.names.map((item, index) => (
            <Button
              key={item.id}
              color='green'
              onPress={() => this.alertItemName(item)}
              title = {item.name} />
          ))
        }
      </View>
    );
  }
}