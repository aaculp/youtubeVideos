import React, { Component } from 'react'

import SearchBar from './components/SearchBar'
import youtube from './api/youtube'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

export default class App extends Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onTermSubmit('Top Video');
    }

    onTermSubmit = async term => {
        // console.log(term)
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        // console.log(response)
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
        console.log(this.state.videos)
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
