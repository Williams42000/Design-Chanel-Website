import { Request } from "express";

import { Mdl_Article_ajouter, Mdl_Article_lister, Mdl_Article_supprimer, Mdl_Article_modifier } from "./modelArticle";

export const Ctl_Article_gestionActions = async (req: Request): Promise<object> => {
  let action: string = req.body.action;
  
  switch (action) {
    case "ajouter":
      return await Mdl_Article_ajouter(req);
    case "lister":
      return await Mdl_Article_lister();
      case "supprimer":
        return await Mdl_Article_supprimer(req);
      case "modifier":
        return await Mdl_Article_modifier(req);
    default:
      return {};
  }
};