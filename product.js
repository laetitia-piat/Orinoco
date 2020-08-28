fetch('http://localhost:3000/api/teddies/')
.then(reponse => reponse.json())
.then(reponse => {
	console.log(reponse)
	const paramsString = window.location;
	var searchParams = new URLSearchParams('http://localhost:3000/api/teddies/?id=');
	const id = searchParams
	.get('id')
	const main = document.querySelector("main")
	main.className = 'container'
	const carte=document.createElement("div")
	carte.className = 'card mb-3 col-10 col-md-3 col-lg-3';
	const titre=document.createElement("h3")
	titre.className = 'card-title'
	const description=document.createElement("p")
	description.className = 'card-text'
	const image=document.createElement("img")
	image.className = 'card-img-top';

	titre.textContent = teddy.name
	image.src = teddy.imageUrl
	description.textContent = teddy.description

	carte.appendChild(titre)
	carte.appendChild(image)
	carte.appendChild(description)
	main.appendChild(carte)

	/*reponse.forEach(teddy => {
		const carte=document.createElement("div")
		carte.className = 'card mb-3 col-10 col-md-3 col-lg-3';
		const titre=document.createElement("h3")
		titre.className = 'card-title'
		const image=document.createElement("img")
		image.className = 'card-img-top';
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

	})*/
})
