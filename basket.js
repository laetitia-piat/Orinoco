fetch('http://localhost:3000/api/teddies/')

const panier = JSON.parse(localStorage.getItem("panier")) //RECUPERATION DU LOCALSTORAGE
console.log(panier)
const main = document.querySelector("main")
let totalPrice = 0 //INITIALISATION DE LA VARIABLE TOTALPRICE A 0
const panierTableau = document.querySelector("#panier-tableau")
const products=[]

if (panier == null) {
//MESSAGE EN CAS DE PANIER VIDE
 	main.innerHTML = '<h2 class="font-italic col-12 text-center">Votre panier est vide!</h2>';
  	let tableContainer = document.querySelector("table");
  	tableContainer.classList.add("d-none")
  	let formContainer = document.querySelector(".form-container");
  	formContainer.classList.add("d-none");
} else {
//BOUCLE POUR CHAQUE TEDDY - CREATION DE L'EMPLACEMENT DE CHAQUE ELEMENT MIS AU PANIER
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

//STOCKAGE DU PRIX TOTAL DANS LE LOCALSTORAGE POUR PAGE DE CONFIRMATION
totalCost= localStorage.setItem("totalPrice", JSON.parse(totalPrice));
totalCost = parseInt(totalPrice);
//AFFICHAGE DU PRIX TOTAL
const total = document.querySelector(".total")
const totalP= document.createElement('h4')
totalP.textContent =  " TOTAL : " + totalPrice + " EUROS "
total.appendChild(totalP)

const valid = document.getElementById('form')
valid.addEventListener('submit', function(events){
	events.preventDefault()
	const contact = {}
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
	.then(reponse => reponse.json()) //reponse en JSON
	.then(reponse => {
	console.log(reponse)
	location.href= 'confirm.html?orderId='+reponse.orderId ;
	localStorage.setItem('order',JSON.stringify(contact));
	})
  	})

//AFFICHAGE DU NOMBRE DE PRODUIT DANS LE PANIER
let nombrePanier= document.querySelector(".nombre-panier")
let nombrePanierDepart = 0 //INITIALISATION DE LA VARIABLE A 0
let nombrePanierTotal = panier

if(panier === 0){
	nombrePanier.textContent =  nombrePanierDepart;
}else {
	nombrePanier.textContent =  nombrePanierTotal
}

