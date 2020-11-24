import React, { Component } from 'react'
import { connect } from 'react-redux'
/* import auth from '../store/reducers/auth' */
import { authUser, logout } from '../store/actions'

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        const { username, password } = this.state
        const { authType } = this.props
        e.preventDefault()
        this.props.authUser(authType || 'login', { username, password })

    }
    render() {
        const { username, password } = this.state
        return <div>
            <form className="form" onSubmit={this.handleSubmit}>
                <label className="form-label" htmlFor="username">Username</label>
                <input className="form-input" autoComplete='off' type="text" value={username} name="username" onChange={this.handleChange} />
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-input" autoComplete='off' type="password" value={password} name="password" onChange={this.handleChange} />
                <div className="button_center">
                    <button className="button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    }
}

export default connect(() => ({}), { authUser, logout })(Auth);

