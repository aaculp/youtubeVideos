import React, { Component } from 'react'

import SearchBar from './components/SearchBar';
import youtube from './api/youtube'
import VideoList from './components/VideoList'

export default class App extends Component {
    state = { videos: []} 

    onTermSubmit = async term => {
        // console.log(term)
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        // console.log(response)
        this.setState({ videos: response.data.items })
        console.log(this.state.videos)

    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onTermSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos
                <VideoList videos={ this.state.videos } />
            </div>
        )
    }
}
