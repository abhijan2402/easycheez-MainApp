import auth from '@react-native-firebase/auth';
export const login=async(email,password)=>{
    if(email==='' || password===''){
      alert("Please enter email and password");
      return false
    }
    return auth().signInWithEmailAndPassword(email, password)
    .then((e)=>{
        return e
    })
    .catch((error) => {
        return error
    })     
}