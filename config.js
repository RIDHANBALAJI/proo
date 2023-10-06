import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyD4yQpUE4Dpp97cHWQgh9lQjRAow0CTa2o",
        authDomain: "teams-59ed0.firebaseapp.com",
        databaseURL: "https://teams-59ed0-default-rtdb.firebaseio.com",
        projectId: "teams-59ed0",
        storageBucket: "teams-59ed0.appspot.com",
        messagingSenderId: "228177476615",
        appId: "1:228177476615:web:3e7b6455dc5268cc5f7ea2"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();