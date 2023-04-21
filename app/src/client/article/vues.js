
const creerCard = (unArticle, from) => {
    let rep = `
    <div id="${unArticle.ida}" class="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div class="card product-item border-0 mb-4">
            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img class="img-fluid color w-80" src="../../serveur/pochettes/${unArticle.imageart}" alt="...">
            </div>
            <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">${unArticle.nomarticle}</h6>
                <div class="d-flex justify-content-center">
                    <h6>$${unArticle.prix.toFixed(2)}</h6><h6 class="text-muted ml-2"></h6>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>Voir Détail</a>  `
                if(from == 1){
                    rep += `<a href="#" onClick="ajouterPanier(${unArticle.ida});" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Ajouter au panier</a>  `;
                }
                rep += `
            </div>
        </div>
    </div>
    `;
    return rep;
}

const listerArticles = (listeArticles , from) => {
    let contenu = `<div class='row'>`;
    for (let unArticle of listeArticles) {
        contenu += creerCard(unArticle , from);
    }
    contenu += `</div>`;
    document.getElementById('contenu').innerHTML = contenu;
}



var controleurViewArticles = (action, donnees, idmsg) => {
    switch (action) {
        case 'lister':
            listerArticles(donnees, idmsg);
            break;
    }
}
