import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import { albums } from './data'
import Albums from './Albums';

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
        <Albums albums={this.state.albums} collectionName={this.state.collectionName} />
			</div>
		);
	}
}

export default App;
