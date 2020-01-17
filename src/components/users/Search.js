import React, { Component } from 'react'

export class Search extends Component {

    state = {
        text: ''
    };

    //If we dont want to use arrow function we need to do a bind(this) for it to work. look on form
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.text)
    }

    onChange = (event) => {
        //Note
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)} className="Form">
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange} />
                    <input type="Submit" value="Search" className="btn btn-dark btn-block" />
                </form>
            </div>
        )
    }
}

export default Search
