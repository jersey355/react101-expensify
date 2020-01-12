import {
    firebase,
    googleAuthProvider,
    facebookAuthProvider
} from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    };
};

export const startGoogleLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startFacebookLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

export const register = (uid) => ({
    type: 'REGISTGER',
    uid
});

export const startUserRegistration = (email, password) => {
    return () => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    };
};