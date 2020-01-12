import React from 'react';
import { connect } from 'react-redux';
import PublicHeader from './PublicHeader';
import { startUserRegistration } from '../actions/auth';

export class RegistrationPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: props.email ? props.email : '',
            password1: props.password1 ? props.password1 : '',
            password2: props.password2 ? props.password2 : '',
            error: ''
        };
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    }

    onPassword1Change = (e) => {
        const password1 = e.target.value;
        this.setState(() => ({ password1 }));
    }

    onPassword2Change = (e) => {
        const password2 = e.target.value;
        this.setState(() => ({ password2 }));
    }

    onSubmit = (e) => {

        e.preventDefault();

        if (!this.state.email || !this.state.password1 || !this.state.password2) {
            this.setState(() => ({ error: 'All fields are required!' }));
            return;
        }

        if (this.state.password1 !== this.state.password2) {
            this.setState(() => ({ error: 'Passwords must match (including case)!' }));
            return;
        }

        this.setState(() => ({ error: '' }));
        this.props.startUserRegistration(this.state.email, this.state.password1);
    };

    render() {
        return (
            <div>
                <PublicHeader />
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Register</h1>
                    </div>
                </div>
                <div className="content-container">
                    <form className="form" onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            placeholder="Email Address"
                            autoFocus
                            className="text-input"
                            value={this.state.email}
                            onChange={this.onEmailChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="text-input"
                            value={this.state.password1}
                            onChange={this.onPassword1Change}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="text-input"
                            value={this.state.password2}
                            onChange={this.onPassword2Change}
                        />
                        <div className="box-layout__dual-column-content">
                            <button className="button">Register</button>
                            <button className="button button--secondary">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startUserRegistration: (email, password) => dispatch(startUserRegistration(email, password))
});

export default connect(undefined, mapDispatchToProps)(RegistrationPage);