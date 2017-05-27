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
});

firebaseRef.child('user').on('value', (snapshot) => {
    console.log('User ref changed', snapshot.val());
});

firebaseRef.child('user').update({name: 'Mike'});

firebaseRef.child('app').update({name: 'Something Else!'});