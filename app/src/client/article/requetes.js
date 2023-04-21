let listeArticles = null;

let ajouter = () => {
  let formArticle = new FormData(document.getElementById("formAjouter"));
  formArticle.append("action", "ajouter");
  $.ajax({
    type: "POST",
    url: "/article",
    data: formArticle,
    dataType: "json",
    contentType: false,
    processData: false,
    success: function (reponse) {
      $("#formAjouter")[0].reset();
      messageToast(reponse.msg);	
    },
    fail: () => {
		messageToast("Probléme pour enregistrer l'article");
	}
  });
};

let lister = (provenance) =>  {
	let formDataLister = new FormData();
    formDataLister.append("action","lister");
	let donneesLister= formaterDonneesFormData(formDataLister);
	fetch('/article', {
			method: "POST",
			body: donneesLister
		})
		.then(reponse => reponse.json())
		.then(reponseJSON => {
			
			if (reponseJSON.OK) {
				listeArticles = reponseJSON.listeArticles;
				if(provenance == "index"){
					controleurViewArticles("lister", reponseJSON.listeArticles, 0);
				} else if (provenance == "membre") {
					controleurViewArticles("lister", reponseJSON.listeArticles, 1);
				} else if(provenance == "admin"){
					genererPagination(reponseJSON.listeArticles);
				}
			} else {
				messageToast(reponseJSON.msg);
			}
		})
		.catch((error) => {
			messageToast("Problème pour lister les articles, essayez plus tard. Merci.");
		});
}

let supprimer = (ida) => {
	let formDataSupprimer = new FormData();
	formDataSupprimer.append("action", "supprimer");
	formDataSupprimer.append("idArticle", ida);
	let donneesSupprimer = formaterDonneesFormData(formDataSupprimer);
	fetch('/article', {
		method: "POST",
		body: donneesSupprimer
	})
	.then(reponse => reponse.json())
	.then(reponseJSON => {
		if (reponseJSON.OK) {
			document.getElementById(ida).remove();
			window.location.href = "../admin/admin.html";
			
			}
	})
	.catch((error) => {
		messageToast("Problème pour supprimer l'article, essayez plus tard. Merci.");
	});
}

let modifier = () => {
	let formArticle = new FormData(document.getElementById('formModifier'));
	formArticle.append("action", "modifier");
	$.ajax({
		type: 'POST',
		url: '/article',
		data: formArticle,
		dataType: 'json',
		contentType: false,
		processData: false,
		success: function (reponse) { 
			window.location.href = "../admin/admin.html";
			
		},
		fail: () => {
			messageToast("Problème pour modifier l'article");
		}
	});
}