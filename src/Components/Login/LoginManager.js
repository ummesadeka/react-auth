import firebase from 'firebase';
import firebaseConfig from '../../firebase.config';


export  const initiateLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
}

export const googleSIgnIn= ()=> {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(res =>{
        let {displayName, email} = res.user
        const signedInUser = {
            isSignedIn : true,
            name: displayName,
            email:email,
            success : true
        }
        return signedInUser;
        })
        .catch((error) => {
            console.log(error);
            console.log(error.message);
          });
}
export const fbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((res) => {
      const user = res.user;
      console.log('fb user after sign in:' ,user);
      const {displayName, photoURL, email,R } = res.user;
          const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
            success: R,
          };
          return signedInUser;
    })
    .catch((error) => {
      console.log(error.message);
    });
  };

export const createAccountWithEmailAndPassword = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      newUserInfo.isSignedIn = false;
      upDateUserName(name);
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      console.log(error)
    });
};
export const signInWithEmailAndPassword = (email,password) => {
    return firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then((res) => {
      const {displayName,email,error,} = res.user;
      const signedInUserInfo = {
        isSignedIn: true,
        name: displayName,
        email: email,
        error:error,
        success: true,
      };
     return signedInUserInfo;
    })
    .catch((error) => {
      const signedInUserInfo = {};
      signedInUserInfo.error = error.message;
      signedInUserInfo.success = false;
      return signedInUserInfo;
    });
  }
  const upDateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("user name updated successfully");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };