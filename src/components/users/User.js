import React, { Component } from 'react'

export class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }

    render() {

        const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = this.props.user;

        const { loading } = this.props.user;
        return (
            <div>
                {/* TEMP */}
                {name}
            </div>
        )
    }
}

export default User
