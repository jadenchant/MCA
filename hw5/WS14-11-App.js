import React, { Component } from 'react';
import Bananas from './Bananas.js';

export default class MyApp extends Component {
    render() {
	return (
	    <Bananas label="Got Bananas???!!"
				url="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" /> 
	);
    }
}
