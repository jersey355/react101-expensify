import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin, startGoogleLogin, startFacebookLogin } from '../actions/auth';

export class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: props.email ? props.email : '',
            password: props.password ? props.password : '',
            error: ''
        };
    }

    onSubmit = (e) => {

        e.preventDefault();

        if (!this.state.email || !this.state.password) {
            this.setState(() => ({ error: 'Email and password are required for login!' }));
            return;
        }

        this.setState(() => ({ error: '' }));
        this.props.startLogin(this.state.email, this.state.password);
    };

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    }

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    }

    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify</h1>
                    <p>It's time to get your expenses online!</p>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <form onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            placeholder="Email Address"
                            autoFocus
                            className="text-input"
                            onChange={this.onEmailChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="text-input text-area--stacked"
                            onChange={this.onPasswordChange}
                        />
                        <div className="box-layout__dual-column-content">
                            <button className="button button--link2">Login</button>
                            <Link className="button button--link2" to="/register">Register</Link>
                        </div>
                    </form>
                    <button className="button button--stacked" onClick={this.props.startGoogleLogin}>Login with Google</button>
                    <button className="button button--stacked" onClick={this.props.startFacebookLogin}>Login with Facebook</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: (email, password) => dispatch(startLogin(email, password)),
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);