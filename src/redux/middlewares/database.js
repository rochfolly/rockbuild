import firebase  from '../../database/firebaseInit';
import { actionTypes } from '../actions/actionTypes';
import { setCurrentUser, setCriterias, setEvents } from '../actions/actions';
import { initialUserData }  from '../../database/initialData';

////// DATABASE MIDDLEWARE //////
export const database = store => next => action => {
  switch(action.type){

    case actionTypes.INIT_FIREBASE: 
      action.payload = firebase;
      next(action);
      break;

    case actionTypes.CREATE_USER:
        let newUserEmail = action.payload.email;
        let newUserPassword = action.payload.password;
        let name = action.payload.name;
        // Create Firebase account
        firebase.auth().createUserWithEmailAndPassword(newUserEmail, newUserPassword).then(userData => {
          let newUser = userData.user;
          console.log('NEW USER', userData.user);
          const userInfo = {
            username: name,
            created: newUser.metadata.creationTime,
            lastConnection: newUser.metadata.lastSignInTime,
            email: newUserEmail,
            uid: newUser.uid,
          }
          // Create user table
          firebase.database().ref(newUser.uid + '/user').set(userInfo, (error) => {
            if(error) console.log(error)
            else {
              store.dispatch(setCurrentUser(newUserEmail, newUserPassword))
              firebase.database().ref(newUser.uid).set(initialUserData, (error) => {
                if(error) console.log(error)
                else {
                    next(action);
                }
              }) 
            }
          })
        }).catch(error => {
          console.log(error);
          alert(error.message)
        });  
        break;

    case actionTypes.SET_USER:
        let email = action.payload.email;
        let password = action.payload.password;
        firebase.auth().signInWithEmailAndPassword(email, password).then(userData => {
          console.log('Login USER', userData.user);
          let loggedInUser = userData.user;
          action.payload.user = loggedInUser;
          action.payload.uid = loggedInUser.uid;
          firebase.database().ref(loggedInUser.uid + '/user/username').once('value', (nameData) => {
            action.payload.name = nameData.val();
            firebase.database().ref(loggedInUser.uid + '/settings').once('value', (settingsData) => {
              console.log('SETTINGS', settingsData.val());
              action.payload.settings = settingsData.val();
              next(action)
            })
          }, (error) => {
            alert(error.message);
            console.log(error)
          })
        }).catch(error => {
          console.log(error);
          alert(error.message);
          }); 
        break;
    }
}