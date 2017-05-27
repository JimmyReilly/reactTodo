import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyBWEfpoqCRjSLXEZTQldmGsCOPfZeVrRy4",
        authDomain: "reilly-todo-app.firebaseapp.com",
        databaseURL: "https://reilly-todo-app.firebaseio.com",
        projectId: "reilly-todo-app",
        storageBucket: "reilly-todo-app.appspot.com",
        messagingSenderId: "991850785663"
    };
    firebase.initializeApp(config);
}
catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;