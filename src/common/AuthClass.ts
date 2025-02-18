import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase";
import {  collection, doc, getDoc, setDoc } from "firebase/firestore";

 const googleProvider:  GoogleAuthProvider = new GoogleAuthProvider();

//elle gère les connexion de google
class AuthClass {
    authFire;
    dbFire;

    constructor (){
        this.authFire = auth;
        this.dbFire = db;
        //instance 
     
    }
  connexionGoogle = async () => {

        const result = await signInWithPopup( this.authFire,googleProvider)
        console.log("user", result);

        if(result !=null){//si l'utilisateur est connecté 
            //preparation de la requette(query)
                    //je controlle si l'utilisateur est en base dans le store(firestore)
            const docRefUser = doc(this.dbFire,"users", result.user.uid)//je vais lire le document //lecture de la table
                //Lancement de la requette
                    const snapUser = await getDoc(docRefUser);// cest la response d ela rrquete
                    // const snapUser = await collection(this.dbFire,"users");;
                    if(!snapUser.exists()){//si 'l'utilisateur n'existe pas je dois le creer 
                            await setDoc(docRefUser,{
                                name: result.user.displayName
                                
                            })
                    }
        }
 }


}

export default AuthClass;