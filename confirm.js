//AFFICHAGE DU NOMBRE DE PRODUIT DANS LE PANIER
let nombrePanierZero = 0 //INITIALISATION DE LA VARIABLE A 0
const nombrePanier= document.querySelector(".nombre-panier")
nombrePanier.textContent =  nombrePanierZero

//RECUPERATION DU LOCALSTORAGE
const panier = JSON.parse(localStorage.getItem("panier")) 
const totalPrice = JSON.parse(localStorage.getItem("totalPrice"))
const order = JSON.parse(localStorage.getItem("order"))
console.log(order)

const paramsString = window.location.search
	var searchParams = new URLSearchParams(paramsString);
	const orderId = searchParams.get('orderId')
	console.log(orderId)

const main = document.querySelector("main")
main.className = 'container-fluid'
const carte=document.createElement("div")
carte.setAttribute("id", "carte-confirmation");
carte.className = 'card mb-3 col-10 col-md-6 col-lg-6';
const nom = document.createElement ("h3")
nom.className = 'card-title'
const confirmation = document.createElement("h4")
confirmation.className = 'card-text-center'
const commande = document.createElement("p")
const numeroCommande = orderId

nom.textContent = order.firstName + "  " +  order.lastName 
confirmation.textContent = " Merci pour votre commande d'un montant de " + totalPrice + " EUROS." 
commande.textContent = "Votre commande porte le numéro  " + numeroCommande + "."

carte.appendChild(nom)
carte.appendChild(confirmation)
carte.appendChild(commande)
main.appendChild(carte)

localStorage.clear(panier)
