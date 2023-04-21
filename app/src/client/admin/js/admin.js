let contenu;
let deconnecter = () => {
    document.getElementById('dc').submit();
}

function editerArticle(unArticle){
	document.getElementById('nomarticleM').value=unArticle.nomarticle;
	document.getElementById('prixM').value=unArticle.prix;
	document.getElementById('descriptionM').value=unArticle.description;
	document.getElementById('categorieM').value=unArticle.categorie;
	document.getElementById('seuilM').value=unArticle.seuil;
	document.getElementById('qteinventaireM').value=unArticle.qteinventaire;
	document.getElementById('anciennePochette').value = unArticle.imageart;
	document.getElementById('idf').value = unArticle.ida;
	$('#modalModifier').modal('show');
}

let idArticleSupprimer;

function supprimerArticle(ida){
	idArticleSupprimer = ida;
	$('#supprimerArticleModal').modal('show');
}

function requetteSupprimerArticle(){
	supprimer(idArticleSupprimer);
}

function enleverMultiplesArticles(){                  
	let listeCheckBoxes = document.getElementsByName("options[]");
	let listeArticles="";
	for(let uneOption of  listeCheckBoxes){
		if (uneOption.checked){
			listeArticles+=(uneOption.value+";"); 
		}
	}
	if(listeArticles.length > 0){
		listeArticles=listeArticles.substring(0,listeArticles.length-1);
		document.getElementById("idaM").value = listeArticles;
		document.getElementById("formEnleverMultiples").submit();
	}
}

$(document).ready(function(){
	
	$('[data-toggle="tooltip"]').tooltip();
	
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});
});


//pour le paginator


var $pagination,
totalRecords = 0,
records = [],
displayRecords = [],
recPerPage = 5,
page = 1,
totalPages = 0;

function genererPagination(source){
	if (source == listeArticles) {
		$pagination = $('#pagination');
		records = listeArticles;
		totalRecords = records.length;
		totalPages = Math.ceil(totalRecords / recPerPage);
		apply_pagination();
	} else if (source == listeMembres) {

	}
	
}


function apply_pagination() {
    $pagination.twbsPagination({
          totalPages: totalPages,
          visiblePages: 6,
          onPageClick: function (event, page) {
                displayRecordsIndex = Math.max(page - 1, 0) * recPerPage;
                endRec = (displayRecordsIndex) + recPerPage;
               
                displayRecords = records.slice(displayRecordsIndex, endRec);
                generate_table();
          }
    });
}

function generate_table() {
    let tr;
    $('#emp_body').html('');
	let rep="";
	
    for (let unArticle of displayRecords) { 
		rep+=`
			<tr id="${unArticle.ida}">
				<td>${unArticle.ida}</td>
				<td><img class='img-fluid'  width='60' height='60' src='../../serveur/pochettes/${unArticle.imageart}'></td>
				<td>${unArticle.nomarticle}</td>
				<td>${unArticle.description }</td>
				<td>${unArticle.prix}</td>
				<td>${unArticle.categorie}</td>
				<td>${unArticle.seuil}</td>
				<td>${unArticle.qteinventaire}</td>
				<td>
					<a href="#" onClick='editerArticle(`;
				rep+=JSON.stringify(unArticle);
				rep+=`)' class="edit" data-bs-toggle="modal"><i class="bi bi-pencil" data-toggle="tooltip" title="Modifier"></i></a>
					<a href="#" onClick='supprimerArticle(${unArticle.ida})' class="delete" data-toggle="modal"><i class="bi bi-trash3" data-toggle="tooltip" title="Enlever"></i></a>
				</td>
			</tr>`;
    }

	$('#emp_body').html(rep);
}	

