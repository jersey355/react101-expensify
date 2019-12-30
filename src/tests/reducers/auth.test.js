import reducer from '../../reducers/auth';

test('Should set UID on login', () => {

    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };

    const state = reducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('Should clear UID on logout', () => {
    const action = { type: 'LOGOUT' };
    const state = reducer({ uid: 'userid' }, action);
    expect(state).toEqual({});
});