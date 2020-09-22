	// CREATION DU STOCKAGE DANS LE LOCAL STORAGE
if(!localStorage.getItem("panier")){
	localStorage.setItem("panier",JSON.stringify([]))
}

//RECUPERATION DU LOCALSTORAGE POUR LE PANIER
const panier = JSON.parse(localStorage.getItem("panier")) 

//AFFICHAGE DU NOMBRE DE PRODUIT DANS LE PANIER
let nombrePanier= document.querySelector(".nombre-panier")
console.log(panier.length)
if(panier == null || panier.length <= 0 ){
	nombrePanier.textContent =  0;
}else {
	nombrePanier.textContent =  panier.length
}
const main = document.querySelector("main")
main.className = 'container'

const paramsString = window.location.search
	var searchParams = new URLSearchParams(paramsString);
	const id = searchParams.get('id')
	console.log(id)

	//APPEL DE L'API POUR UN SEUL TEDDY 
fetch('http://localhost:3000/api/teddies/' + id)
.then(reponse => reponse.json())
.then(reponse => {
	afficherTeddies(reponse)
})
.catch(erreur =>{
	afficherErreur()
})
function afficherErreur(){
	const carte=document.createElement("div")
	carte.className = 'card mb-3 col-8 col-md-8 col-lg-8'
	carte.setAttribute("id", "erreur");
	const messageErreur=document.createElement("h2")
	messageErreur.textContent = "Le produit demandé n'est pas disponible à l'affichage, veuillez réessayer plus tard"
	carte.appendChild(messageErreur)
	main.appendChild(carte)
}
function afficherTeddies(reponse) {
	console.log(reponse)
	//CREATION DE L'EMPLACEMENT POUR LE TEDDY SELECTIONNÉ
	const carte=document.createElement("div")
	carte.setAttribute("id", "carte");
	carte.className = 'card col-10 col-md-6 col-lg-6';
	const titre=document.createElement("h3")
	titre.className = 'card-title'
	const description=document.createElement("p")
	description.className = 'card-text'
	const image=document.createElement("img")
	image.className = 'card-img-top';
	const select=document.createElement("select")
	const bouton=document.createElement("button")
	bouton.className = 'btn btn-secondary'

	//CREATION DU CONTENU DE L'ELEMENT SELECTIONNÉ
	titre.textContent = reponse.name
	image.src = reponse.imageUrl
	description.textContent = reponse.description

	//MISE EN PLACE DE CHAQUES ELEMENTS
	carte.appendChild(titre)
	carte.appendChild(image)
	carte.appendChild(description)
	carte.appendChild(select)
	carte.appendChild(bouton)
	main.appendChild(carte)

	//CREATION DU MENU DEROULANT POUR CHOIX D'OPTION AVEC LA BOUCLE FOREACH
	reponse.colors.forEach(couleur =>{
		const option=document.createElement("option")
		option.textContent = couleur
		select.appendChild(option)
	})

	//CREATION DU BOUTON POUR L'AJOUT AU PANIER AVEC LE LOCALSTORAGE ET LA GESTION D'EVENEMENT "ADDEVENTLISTENER"
	bouton.textContent = "Ajouter au panier"
	bouton.addEventListener('click', function(){
		const panier = JSON.parse(localStorage.getItem("panier"))
		panier.push(reponse)
  		localStorage.setItem ("panier", JSON.stringify(panier)); 
  		location.href= 'basket.html' ;
  	})
}