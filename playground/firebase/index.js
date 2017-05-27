import firebase from 'firebase';

var config = {
apiKey: "AIzaSyBWEfpoqCRjSLXEZTQldmGsCOPfZeVrRy4",
authDomain: "reilly-todo-app.firebaseapp.com",
databaseURL: "https://reilly-todo-app.firebaseio.com",
projectId: "reilly-todo-app",
storageBucket: "reilly-todo-app.appspot.com",
messagingSenderId: "991850785663"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app:{
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: "Jimmy",
        age: 25
    }
}).then(() =>{
    console.log('Set worked!');
}, (e) => {
    console.log('Set failed');
});

// firebaseRef.set({
//     appName: 'Todo Application'
// });

firebaseRef.child('user').set({
    name: 'Mike'
});

firebaseRef.child('app').set({
    name: 'Todo App'
});