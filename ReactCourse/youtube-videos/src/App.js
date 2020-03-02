import React, { Component } from 'react'

import SearchBar from './components/SearchBar';

export default class App extends Component {
    state = {} 

    onComponentDidMount() {

    }

    
    render() {
        return (
            <div className='ui container'>
                <SearchBar />
            </div>
        )
    }
}
