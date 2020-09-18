//RECUPERATION DU LOCALSTORAGE 
const panier = JSON.parse(localStorage.getItem("panier")) 

//AFFICHAGE DU NOMBRE DE PRODUIT DANS LE PANIER
let nombrePanier= document.querySelector(".nombre-panier")
let nombrePanierDepart = 0 //INITIALISATION DE LA VARIABLE A 0
let nombrePanierTotal = panier

if(panier === null){
	nombrePanier.textContent =  nombrePanierDepart;
}else {
	nombrePanier.textContent =  nombrePanierTotal
}

const paramsString = window.location.search
	var searchParams = new URLSearchParams(paramsString);
	const id = searchParams.get('id')
	console.log(id)

	// CREATION DU STOCKAGE DANS LE LOCAL STORAGE
if(!localStorage.getItem("panier")){
	localStorage.setItem("panier",JSON.stringify([]))
}

	//APPEL DE L'API POUR UN SEUL TEDDY 
fetch('http://localhost:3000/api/teddies/' + id)
.then(reponse => reponse.json())
.then(reponse => {
	console.log(reponse)

	//CREATION DE L'EMPLACEMENT POUR LE TEDDY SELECTIONNÉ
	const main = document.querySelector("main")
	main.className = 'container'
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
	
	//MISE EN PLACE DE CHAQUES ELEMENTS
	carte.appendChild(titre)
	carte.appendChild(image)
	carte.appendChild(description)
	carte.appendChild(select)
	carte.appendChild(bouton)
	main.appendChild(carte)

	})



