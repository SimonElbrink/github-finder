import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class Search extends Component {

    state = {
        text: ''
    };

    static propsTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
    }


    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' });
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        const { showClear, clearUsers } = this.props

        return (
            <div>
                <form onSubmit={this.onSubmit} className="Form">
                    <input type="text" name="text" placeholder="Search Users..." onChange={this.onChange} value={this.state.text} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}

            </div>
        )
    }
}

export default Search
