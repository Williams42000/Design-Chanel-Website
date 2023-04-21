import { Request } from "express";
import fs from "fs-extra";
import sha1 from "sha1";
import { pool } from "../config/dbconf";

let reponse= {OK:true,msg:"",listeArticles:{}};

export const Mdl_Article_ajouter = async (req: any): Promise<object> => {

  try {
      let dossierPochettes = "app/src/serveur/pochettes/";
      let nomarticle = req.body.nomarticle;
      let prix = req.body.prix;
      let description = req.body.description;
      let categorie = req.body.categorie;
      let seuil = req.body.seuil;
      let qteinventaire = req.body.qteinventaire;
      let pochette = "avatar.jpg";
      let requete = "INSERT INTO articles VALUES(0,?,?,?,?,?,?,?)";
      if (req.files.length > 0) {
        let extension = req.files[0].originalname.split(".").pop();
        pochette = sha1(nomarticle + process.hrtime()) + "." + extension;
        await fs.move(req.files[0].path, dossierPochettes + pochette);
      }
      await pool.query(requete, [nomarticle, description, pochette, categorie, qteinventaire, seuil, prix]);
      reponse.msg = "Article bien enregistré";
  } catch (e:any) {
      reponse.OK=false;
      reponse.msg = "Problème avec l'enregistrement de l'article!";
  } finally {
    return reponse;
  }
}

export const Mdl_Article_lister = async (): Promise<object> => {

  let requette = "SELECT * FROM articles";
  try {
    let resultat:any = await pool.query(requette,[]);
    let resultatJSON = resultat[0];
    reponse.listeArticles = resultatJSON;
  } catch (e:any) {
    reponse.OK=false;
    reponse.msg = "Problème pour lister les articles!";
  } finally {
    return reponse;
  }
}

export const Mdl_Article_supprimer = async (req: Request): Promise<object> => {
  let dossierPochettes = "app/src/serveur/pochettes/";
   let idArticle = req.body.idArticle;
   try {
       let requette="SELECT * FROM articles WHERE ida=?";
       let resultat:any = await pool.query(requette,[idArticle]);
       let resultatJSON = resultat[0];
       if(resultatJSON.length > 0){
           requette="DELETE FROM articles WHERE ida=?";
           await pool.query(requette,[idArticle]);
           if(resultatJSON.pochette != "avatar.jpg"){
               await fs.remove(dossierPochettes+resultatJSON.pochette);
           }
           reponse.msg="Article supprimé avec succès"; 
       } else {
           reponse.msg="Article introuvable";
       };
   }catch(err){
       reponse.OK=false;
       reponse.msg = "Problème avec la suppression de l'article!";
   } finally {
     return reponse;
   }
}

export const Mdl_Article_modifier = async(req:any):Promise<object> => {
  let dossierPochettes = "app/src/serveur/pochettes/";
  let idf = req.body.idf;
  let nomarticle = req.body.nomarticle;
  let prix = req.body.prix;
  let description = req.body.description;
  let categorie = req.body.categorie;
  let seuil = req.body.seuil;
  let qteinventaire = req.body.qteinventaire;
  let anciennePochette = req.body.anciennePochette;
  let source="";

  console.log(req.body);

  console.log(anciennePochette);
  
  let pochette=anciennePochette;

  try{     

    
      if (req.files.length > 0) {
        let extension = req.files[0].originalname.split(".").pop();
        pochette = sha1(nomarticle + process.hrtime()) + "." + extension;
        await fs.move(req.files[0].path, dossierPochettes + pochette);
        if(anciennePochette != "avatar.jpg"){
            await fs.remove(dossierPochettes+anciennePochette);
        }
      }

      
      let requette="UPDATE articles set nomarticle=?, description=?, imageart=?, categorie=?, qteinventaire=?, seuil=?, prix=? WHERE ida=?";
      await pool.query(requette, [nomarticle, description, pochette, categorie, qteinventaire, seuil, prix, idf]);
      reponse.listeArticles={};
      reponse.msg="Article modifié";
    } catch(err) {
        reponse.OK=false;
        reponse.msg = "Problème pour modifier l'article!";
    } finally {
        return reponse;
    }
}
