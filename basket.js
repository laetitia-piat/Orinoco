//RECUPERATION DU LOCALSTORAGE
const panier = JSON.parse(localStorage.getItem("panier"))
console.log(panier)

//AFFICHAGE DU NOMBRE DE PRODUIT DANS LE PANIER
let nombrePanier= document.querySelector(".nombre-panier")
if(panier == null || panier.length <= 0 ){
	nombrePanier.textContent =  0;
}else {
	nombrePanier.textContent =  panier.length
}

//CONSTANTES GENERALES
const main = document.querySelector("main")
const panierTableau = document.querySelector("#panier-tableau")
const products=[]
const contact = {}
let totalPrice = 0 //INITIALISATION DE LA VARIABLE TOTALPRICE A 0

//MESSAGE EN CAS DE PANIER VIDE
if (panier == null) {
 	main.innerHTML = '<h2 class="font-italic col-12 text-center">Votre panier est vide!</h2>';
  	let tableContainer = document.querySelector("table");
  	tableContainer.classList.add("d-none")
  	let formContainer = document.querySelector(".form-container");
  	formContainer.classList.add("d-none");
//AFFICHAGE DU PANIER
} else {
	afficherPanier()
}

//AFFICHAGE DU PRIX TOTAL
const total = document.querySelector(".total")
const totalP= document.createElement('h4')
totalP.textContent =  " TOTAL : " + totalPrice + " EUROS "
total.appendChild(totalP)

//STOCKAGE DU PRIX TOTAL DANS LE LOCALSTORAGE POUR PAGE DE CONFIRMATION
totalCost= localStorage.setItem("totalPrice", JSON.parse(totalPrice));
totalCost = parseInt(totalPrice);

//CREATION DU BOUTON DE VALIDATION DU FORMULAIRE
const valid = document.getElementById('form')
valid.addEventListener('submit', function(events){
	events.preventDefault()
	creerContact()
//ET ENVOI DU FORMULAIRE AU SERVEUR
	commande()
})

//FONCTION POUR L'AFFICHAGE DU PANIER
function afficherPanier() {
	//BOUCLE POUR CHAQUE TEDDY - CREATION DE L'EMPLACEMENT DE CHAQUE ELEMENT
	panier.forEach(teddy => {
		products.push(teddy._id)
		const nom=document.createElement("tr")
		const photo=document.createElement("td")
		photo.className = 'photo'
		const photoTd=document.createElement("img")
		photoTd.className = 'card-img'
		const nomTd=document.createElement("td")
		const descriptionTd=document.createElement("td")
		descriptionTd.className = 'description'
		const prixTd=document.createElement("td")	
		totalPrice += teddy.price/100
	//CREATION DU CONTENU DE L'ELEMENT MIS AU PANIER
		photoTd.src = teddy.imageUrl
		nomTd.textContent = teddy.name
		descriptionTd.textContent = teddy.description
		prixTd.textContent = teddy.price/100 + " EUR "
	//MISE EN PLACE DE CHAQUES ELEMENTS DU PANIER
		nom.appendChild(photo)
		photo.appendChild(photoTd)
		nom.appendChild(nomTd)
		nom.appendChild(descriptionTd)
		nom.appendChild(prixTd)
		panierTableau.prepend(nom)
	})
}

//FONCTION POUR LA CREATION DU FORMULAIRE
function creerContact() {
	const nom = document.getElementById('lastName').value
	const prenom = document.getElementById('firstName').value
	const email = document.getElementById('inputEmail').value
	const adresse = document.getElementById('inputAddress').value
	const ville = document.getElementById('inputCity').value

	contact.lastName = nom
	contact.firstName = prenom
	contact.email = email
	contact.address = adresse
	contact.city = ville
}

//FONCTION POUR L'ENVOI DES INFORMATIONS AU SERVEUR
function commande() {
	fetch('http://localhost:3000/api/teddies/order',{
		method:'POST',
		headers:{
			'Accept': 'application/json',
      		'Content-Type': 'application/json'
		},
		body:JSON.stringify({
			products:products, 
			contact:contact
		})
	})
	.then(reponse => reponse.json())
	.then(reponse => {
	console.log(reponse)
	location.href= 'confirm.html?orderId='+reponse.orderId ;
	localStorage.setItem('order',JSON.stringify(contact));
	})
}