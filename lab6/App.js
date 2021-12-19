import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './library/HomeScreen';
import PizzaTranslator from './library/PizzaTranslator';
import FetchExample2 from './library/FetchExample2';
import Banana from './library/Banana';

const Stack = createStackNavigator();

export default class NavExample extends Component {
    render() {
        return (
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Pizza" component={PizzaTranslator}/>
                <Stack.Screen name="Fetch" component={FetchExample2}/>
                <Stack.Screen name="Banana" component={Banana}/>
              </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
