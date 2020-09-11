fetch('http://localhost:3000/api/teddies/') //APPEL DE L'APUI
const panier = JSON.parse(localStorage.getItem("panier")) //RECUPERATION DU LOCALSTORAGE 
console.log(panier)
let totalPrice = 0
const panierTableau = document.querySelector("#panier-tableau")

//BOUCLE POUR CHAQUE TEDDY - CREATION DE L'EMPLACEMENT DE CHAQUE ELEMENT MIS AU PANIER
panier.forEach(teddy => {
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

//AFFICHAGE DU PRIX TOTAL
const total = document.querySelector(".total")
const totalP= document.createElement('h4')
totalP.textContent =  " TOTAL : " + totalPrice + " EUROS "
total.appendChild(totalP)
