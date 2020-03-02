import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        term: ''
    }

    onSearchSubmit = (e) => {
        this.setState({term: e})
    }


    render() {
        return (
            <div>
                <input value={this.state.term} />
            </div>
        )
    }
}
