const paramsString = window.location.search
	var searchParams = new URLSearchParams(paramsString);
	const id = searchParams.get('id')

const panier = localStorage.getItem ("id", id);
panier
console.log(panier)

/*fetch('http://localhost:3000/api/teddies/')
.then(reponse => reponse.json())
.then(reponse => {
	const main = document.querySelector("main")
	main.className = 'container'
	const carte=document.createElement("div")
	carte.className = 'card mb-3 col-10 col-md-3 col-lg-3';
	const titre=document.createElement("h3")
	titre.className = 'card-title'
	const image=document.createElement("img")
	image.className = 'card-img-top';

	titre.textContent = reponse.name
	image.src = reponse.imageUrl

	carte.appendChild(titre)
	carte.appendChild(image)
	main.appendChild(carte)

})*/