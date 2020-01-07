import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let startGoogleLogin, startFacebookLogin, wrapper;

beforeEach(() => {
    startGoogleLogin = jest.fn();
    startFacebookLogin = jest.fn();
    wrapper = shallow(
        <LoginPage
            startGoogleLogin={startGoogleLogin}
            startFacebookLogin={startFacebookLogin}
        />
    );
});

test('Should render LoginPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should call startGoogleLogin on button click', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(startGoogleLogin).toHaveBeenCalled();
});

test('Should call startFacebookLogin on button click', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(startFacebookLogin).toHaveBeenCalled();
});