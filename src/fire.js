import firebase from 'firebase'
 var config = {
    apiKey: "AIzaSyBng2P9n0Z6PrJcDXKccmTUi_fpMF8YfWM",
    authDomain: "allax-7fe5e.firebaseapp.com",
    databaseURL: "https://allax-7fe5e.firebaseio.com",
    projectId: "allax-7fe5e",
    storageBucket: "allax-7fe5e.appspot.com",
    messagingSenderId: "237660602644"
};
var fire = firebase.initializeApp(config);
export default fire;