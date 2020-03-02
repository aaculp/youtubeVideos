import React, { Component } from 'react'

import SearchBar from './components/SearchBar'
import youtube from './api/youtube'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

export default class App extends Component {
    state = { videos: [], selectedVideo: null}

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

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={this.onVideoSelect}
                />
            </div>
        )
    }
}
