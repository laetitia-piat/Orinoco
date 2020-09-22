
//RECUPERATION DU LOCALSTORAGE POUR LE PANIER
const panier = JSON.parse(localStorage.getItem("panier")) 

//AFFICHAGE DU NOMBRE DE PRODUIT DANS LE PANIER
let nombrePanier= document.querySelector(".nombre-panier")
if(panier == null || panier.length <= 0 ){
	nombrePanier.textContent =  0;
}else {
	nombrePanier.textContent =  panier.length
}
const main = document.querySelector("main") //LOCALISATION DANS LE DOCUMENT HTML
main.className = 'container'

//APPEL DE L'API
fetch('http://localhost:3000/api/teddies/') 
.then(reponse => reponse.json()) //reponse en JSON
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
	messageErreur.textContent = "Le serveur est indisponible pour le moment, veuillez réessayer plus tard"
	carte.appendChild(messageErreur)
	main.appendChild(carte)
}

//CREATION DE LA FONCTION "AFFICHERTEDDIES"
function afficherTeddies(teddies){
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
