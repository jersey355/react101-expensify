//import configureMockStore from 'redux-mock-store';
//import thunk from 'redux-thunk';
import { login, logout } from '../../actions/auth';

//const createMockStore = configureMockStore([thunk]);

test('Should generage login action item', () => {
    const uid = 'abc123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('Should generage logout action item', () => {
    const action = logout();
    expect(action).toEqual({ type: 'LOGOUT' });
});