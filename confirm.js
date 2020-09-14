fetch('http://localhost:3000/api/teddies/') //APPEL DE L'APUI

const total = JSON.parse(localStorage.getItem("total")) //RECUPERATION DU LOCALSTORAGE 
console.log(total)


const main = document.querySelector("main")
main.className = 'container'
const messageConfirm = document.createElement ("div")
messageConfirm.className = 'text-center'
const confirmation = document.createElement("h4")
const commande = document.createElement("p")
const numeroCommande = 202000000

confirmation.textContent = "Merci de votre commande d'un montant total de" + total + " EUROS" 
commande.textContent = "Votre commande porte le numéro " + numeroCommande

messageConfirm.appendChild(confirmation)
messageConfirm.appendChild(commande)
main.appendChild(messageConfirm)


