import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBxVBpYoEflVLahmuhsCnk1urxnfzOVfqc",
    authDomain: "expensify-610b6.firebaseapp.com",
    databaseURL: "https://expensify-610b6.firebaseio.com",
    projectId: "expensify-610b6",
    storageBucket: "expensify-610b6.appspot.com",
    messagingSenderId: "61086777937",
    appId: "1:61086777937:web:a52a6c324fab10fb832e70",
    measurementId: "G-14ZFWF971D"
};

firebase.initializeApp(config);
//firebase.analytics();
const db = firebase.database();

export { firebase, db as default };