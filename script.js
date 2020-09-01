fetch('http://localhost:3000/api/teddies/') //appel de l'API
.then(reponse => reponse.json()) //reponse en JSON
.then(reponse => {
	console.log(reponse)
	afficherTeddies(reponse)
	})


function afficherTeddies(teddies){
	const main = document.querySelector("main") //localisation dans le document HTML
	main.className = 'container'
	teddies.forEach(teddy => { //boucle pour chaque teddy - creation de l'emplacement de chaque élément
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
		titre.textContent = teddy.name
		image.src = teddy.imageUrl
		prix.textContent = teddy.price/100 + " EUR "
		lien.href = "product.html?id=" + teddy._id
		lien.textContent = "Description"
		carte.appendChild(titre)
		carte.appendChild(image)
		carte.appendChild(prix)
		carte.appendChild(bouton)
		bouton.appendChild(lien)
		main.appendChild(carte)

	})
}