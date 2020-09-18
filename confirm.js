//AFFICHAGE DU NOMBRE DE PRODUIT DANS LE PANIER
let nombrePanierZero = 0 //INITIALISATION DE LA VARIABLE A 0
const nombrePanier= document.querySelector(".nombre-panier")
nombrePanier.textContent =  nombrePanierZero

//RECUPERATION DU LOCALSTORAGE
const panier = JSON.parse(localStorage.getItem("panier")) 
const totalPrice = JSON.parse(localStorage.getItem("totalPrice"))

const paramsString = window.location.search
	var searchParams = new URLSearchParams(paramsString);
	const orderId = searchParams.get('orderId')
	console.log(orderId)

const main = document.querySelector("main")
main.className = 'container-fluid'
const messageConfirm = document.createElement ("div")
messageConfirm.className = 'text-center'
const confirmation = document.createElement("h4")
const commande = document.createElement("p")
const numeroCommande = orderId

confirmation.textContent = "Merci de votre commande d'un montant de " + totalPrice + " EUROS"
commande.textContent = "Votre commande porte le numéro  " + numeroCommande

messageConfirm.appendChild(confirmation)
messageConfirm.appendChild(commande)
main.appendChild(messageConfirm)

localStorage.clear(panier)
