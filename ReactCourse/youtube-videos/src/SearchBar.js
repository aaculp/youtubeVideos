import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = { term: '' }

    onInputChange = (e) => {
        this.setState({ term: e.target.value })
        console.log(this.state.term)
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        //TODO: Make sure to call callback from parent component
    }


    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Video Search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
