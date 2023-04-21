let enregistrer = () =>  {
	let formMembres = new FormData(document.getElementById('formEnreg'));
    formMembres.append("action","enregistrer");

	
		const radioBoutons = document.getElementsByName('sexe');
		let checked = false;
		let champs = formMembres.keys();
		for (let i = 0; i < radioBoutons.length; i++) {
			if (radioBoutons[i].checked) {
			checked = true;
			break;}
		}
		for (let champ of champs) {
			if ((!formMembres.get(champ)) || (checked==false)) {
				afficherMsg("msg1", "Tous les champs doivent être remplis."); 
				return;
			}
		}

	let donneesMembre = formaterDonneesFormData(formMembres);
	fetch('/membre', {
			method: "POST",
			body: donneesMembre
		})
		.then(reponse => reponse.json())
		.then(reponseJSON => {
			messageToast(reponseJSON.msg);
		})
		.catch((error) => {
			messageToast("Problème pour enregistrer membre, essayez plus tard.Merci.");
		});
}


let listerMembres = () =>  {
	let formDataLister = new FormData();
    formDataLister.append("action","lister");
	let donneesLister= formaterDonneesFormData(formDataLister);
	fetch('/membre', {
			method: "POST",
			body: donneesLister
		})
		.then(reponse => reponse.json())
		.then(reponseJSON => {
			
			if (reponseJSON.OK) {
				listeMembres = reponseJSON.listeMembres;
				genererPagination(reponseJSON.listeMembres);
			} else {
				messageToast(reponseJSON.msg);
			}
		})
		.catch((error) => {
			messageToast("Problème pour lister les membres, essayez plus tard. Merci.");
		});
}