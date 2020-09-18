//AFFICHAGE DU NOMBRE DE PRODUIT DANS LE PANIER
const panier = JSON.parse(localStorage.getItem("panier")) //RECUPERATION DU LOCALSTORAGE 

//AFFICHAGE DU NOMBRE DE PRODUIT DANS LE PANIER
let nombrePanier= document.querySelector(".nombre-panier")
let nombrePanierDepart = 0 //INITIALISATION DE LA VARIABLE A 0
let nombrePanierTotal = panier

if(panier === null){
	nombrePanier.textContent =  nombrePanierDepart;
}else {
	nombrePanier.textContent =  nombrePanierTotal
}

//APPEL DE L'API
fetch('http://localhost:3000/api/teddies/') 
.then(reponse => reponse.json()) //reponse en JSON
.then(reponse => {
	console.log(reponse)
	afficherTeddies(reponse)
	})

//CREATION DE LA FONCTION "AFFICHERTEDDIES"
function afficherTeddies(teddies){
	const main = document.querySelector("main") //LOCALISATION DANS LE DOCUMENT HTML
	main.className = 'container'
	teddies.forEach(teddy => { 

	//BOUCLE POUR CHAQUE TEDDY - CREATION DE L'EMPLACEMENT DE CHAQUE ELEMENT
		const carte=document.createElement("div")
		carte.className = 'card mb-3 col-10 col-md-3 col-lg-3'
		const titre=document.createElement("h3")
		titre.className = 'card-title'
		const image=document.createElement("img")
		image.className = 'card-img-top'
		const prix=document.createElement("p")
		prix.className = 'card-text'
		const bouton=document.createElement("button")
		bouton.className = 'btn btn-secondary'
		const lien=document.createElement("a")

	//CREATION DU CONTENU DES ELEMENTS
		titre.textContent = teddy.name
		image.src = teddy.imageUrl
		prix.textContent = teddy.price/100 + " EUR "
		lien.href = "product.html?id=" + teddy._id
		lien.textContent = "Description"

	//MISE EN PLACE DE CHAQUES ELEMENTS
		carte.appendChild(titre)
		carte.appendChild(image)
		carte.appendChild(prix)
		carte.appendChild(bouton)
		bouton.appendChild(lien)
		main.appendChild(carte)		

	})
}

