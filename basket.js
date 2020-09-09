fetch('http://localhost:3000/api/teddies/')
const panier = JSON.parse(localStorage.getItem("panier"))
console.log(panier)
const panierTableau = document.querySelector("#panier-tableau")

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

	photoTd.src = teddy.imageUrl
	nomTd.textContent = teddy.name
	descriptionTd.textContent = teddy.description
	prixTd.textContent = teddy.price/100 + " EUR "

	nom.appendChild(photo)
	photo.appendChild(photoTd)
	nom.appendChild(nomTd)
	nom.appendChild(descriptionTd)
	panierTableau.prepend(nom)
	nom.appendChild(prixTd)

})
