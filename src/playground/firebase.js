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
firebase.analytics();

const db = firebase.database();

// ------------ PUSHING TO COLLECTION/ARRAY

// db.ref('notes').push({
//     title: 'Course topics',
//     body: 'React Native, Angular, Python'
// });

// db.ref('notes/-LwusEBT3WznbHtEaMSS').remove();

// CHALLENGE:

// ------------ QUERY FOR COLLECTION

// db.ref('expenses').once('value').then((snapshot) => {

//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// ------------ SUBSCRIBE TO UPDATE IN COLLECTION

// db.ref('expenses').on('value', (snapshot) => {

//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// ----------- SUBSCRIBE TO CHILD REMOVE

db.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// ----------- SUBSCRIBE TO CHILD CHANGED

db.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// ----------- SUBSCRIBE TO CHILD ADDED
db.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// -----------

db.ref('expenses').push({
    description: 'Coffee',
    note: 'On way to work',
    amount: 1000,
    createdAt: 0
});

// db.ref().set({
//     name: 'Ed Valdez',
//     age: 44,
//     stressLevel: 7,
//     isSingle: false,
//     job: {
//         title: 'Software Engineer',
//         company: 'Accenture'
//     },
//     location: {
//         city: 'Orlando',
//         state: 'FL',
//         country: 'US'
//     }
// }).then(() => {
//     console.log('Data has been saved');
// }).catch((error) => {
//     console.log('Failed to write data', error);
// });

// db.ref().update({
//     stressLevel: 9,
//     'job/title': 'Software Architect',
//     'job/company': 'Optum',
//     'location/city': 'Miami'
// }).then(() => {
//     console.log('Data has been updated');
// }).catch((error) => {
//     console.log('Failed to update data', error);
// });

// db.ref('isSingle').remove().then(() => {
//     console.log('Data removed successfully');
// }).catch((error) => {
//     console.log('Failed to remove data', error);
// });

// ----------- READ ONCE

// db.ref('location/city').once('value').then((snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
// }).catch((error) => {
//     console.log('Failed to fetch data', error);
// });

// ------------ READ SUBSCRIBE

// const onValueChange = db.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (error) => {
//     console.log('Error fetching data', error);
// });

// ------------ READ UNSUBSCRIBE

//db.ref().off('value', onValueChange);