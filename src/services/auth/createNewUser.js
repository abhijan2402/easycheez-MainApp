import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const createNewUser=async(email,password,confirmPass)=>{
    if(email==='' || password==='' || confirmPass===''){
        alert("Please enter email and password");
        return false
    }
    if(password!==confirmPass){
        alert("botn password must be same");
        return false
    }
    return auth().createUserWithEmailAndPassword(email, password)
    .then(async (res) => {
        return firestore()
        .collection('Users')
        .doc(res.user.uid)
        .set({
            email:email
        })
        .then(() => {
            return(res.user.uid);
        })
        .catch((e)=>{
            return(e)
        })
    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
            return('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            return('That email address is invalid!');
        }

        else
            return(error);
    });
}