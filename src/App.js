import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import { albums } from './data'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      albums: albums,
    }
  }
	render() {
		return (
			<div className='App'>
				<Header />
			</div>
		);
	}
}

export default App;
