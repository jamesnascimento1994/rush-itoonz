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
      searchVal: null
    };
  }
  componentDidMount() {
    fetch(
			'https://itunes.apple.com/search?term=rush&entity=album'
    )
    .then(res => res.json())
    .then(json => {
      this.setState({ data: json })
    });
  }
  filterAlbums = () => {
    const filteredAlbums = this.state.albums.filter(
      (album) => album.collectionName.indexOf(this.state.searchVal) > 0
    );
    this.setState({
      albums: filteredAlbums,
    });
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
