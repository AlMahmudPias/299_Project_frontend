import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import firebaseConfig from './firebase.config';

export const initializeLogInFrameWork = () => {
    if(firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
}


export  const handleGoogleSignIn = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const {displayName , photoURL, email } = result.user;
        const singInUser = {
          isSignedIn: true,
          name : displayName,
          email: email,
          photo: photoURL,
          success: true
        };
        return singInUser;
         

      })
      .catch((error) => {
        console.log(error.message);
      })

  }

  export const handleWithFacebook = () =>{
    var fbprovider = new firebase.auth.FacebookAuthProvider();
    return firebase
  .auth()
  .signInWithPopup(fbprovider)
  .then((result) => {
    const {displayName , photoURL, email } = result.user;
        const singInUser = {
          isSignedIn: true,
          name : displayName,
          email: email,
          photo: photoURL,
          success: true

        };
        return singInUser;
  })
  .catch((error) => {
    console.log(error.message);
  });
    
  }

  export const handleSignOut = () => {
    return firebase.auth().signOut()
      .then(res => {
        const singOutUser = { isSignIn: false, name: '', email: '', photo: '' , success : false}
        return singOutUser;
      })

  }

  export const createUserWithEmailAndPassword = (name, email, password) => {
   return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      const newUserInfo = result.user;
      newUserInfo.error = '';
      newUserInfo.success = true;
      updateUserName(name);
      return newUserInfo;
    })
    .catch(error => {
      const newUserInfo = {  success: false, error: error.message };
      return newUserInfo;

    })
  }

  export const signInWithEmailAndPassword = (email,password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
          const newUserInfo = result.user;
          newUserInfo.error = '';
          newUserInfo.success = true;
          return newUserInfo;
        })
        .catch((error) => {
          const newUserInfo = {  success: false, error: error.message };
          return newUserInfo;
        });
  }

  export const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      
    }).then(() => {
      console.log('User profile updated');
    }).catch((error) => {
      console.log(error);
    });  
  }