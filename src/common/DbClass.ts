import { db } from "../firebase";

class DbClass {

dbFire;

    constructor (){

    

        this.dbFire = db;
     
    }
    //envoi ou enregristement des messages en basw 
    sendMessage = async (message : string) => {
        console.log("message",message)
    }
}





export default DbClass;