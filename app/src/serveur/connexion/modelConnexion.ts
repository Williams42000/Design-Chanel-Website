import { pool } from "../config/dbconf";
let message = {OK:true, msg:"", statut:"", role:""};


const nettoyerMsg = () =>{
      message.OK=true;
      message.msg="";
      message.statut="";
      message.role="";     
  }

 export const Mdl_Connexion = async (donneesConnexion: any): Promise<object> => {
    try {
      nettoyerMsg(); 
      const requeteSelection = "SELECT * FROM connexion WHERE courriel=? AND pass=?";
      let resultat = await pool.query( requeteSelection,[donneesConnexion.courrielc, donneesConnexion.passc]);
      
      
      let resultatJSON = await JSON.parse(JSON.stringify(resultat[0]));
      if(resultatJSON.length > 0){
            message.OK = true;
            message.statut = resultatJSON[0].statut; 
            message.role = resultatJSON[0].role;
      } else {
            message.OK = false;
            message.msg ="SVP vérifiez vos paramètres de connexion.";
        }
    } catch (e:any) {
            
            message.OK = false,
            message.msg = "Problème avec connexion!";
    } finally {
            
         return message;
    }
 }

