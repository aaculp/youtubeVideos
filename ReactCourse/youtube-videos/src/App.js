import React, { Component } from 'react'

import SearchBar from './components/SearchBar';
import youtube from './api/youtube'

export default class App extends Component {
    state = {} 

    onTermSubmit = (term) => {
        // console.log(term)
        youtube.get('/search', {
            params: {
                q: term
            }
        })
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onTermSubmit={this.onTermSubmit} />
            </div>
        )
    }
}
