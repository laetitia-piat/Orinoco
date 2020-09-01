const paramsString = window.location.search
	var searchParams = new URLSearchParams(paramsString);
	const id = searchParams.get('id')
	console.log(id)

fetch('http://localhost:3000/api/teddies/' + id)
.then(reponse => reponse.json())
.then(reponse => {
	console.log(reponse)
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
	const select=document.createElement("select")
	const bouton=document.createElement("button")
	bouton.className = 'btn btn-secondary'

	titre.textContent = reponse.name
	image.src = reponse.imageUrl
	description.textContent = reponse.description
	reponse.colors.forEach(couleur =>{
		const option=document.createElement("option")
		option.textContent = couleur
		select.appendChild(option)
	})
	bouton.textContent = "Ajouter au panier"
	bouton.addEventListener('click', function(){
  	localStorage.setItem ("id", id);
  	location.href= 'basket.html' ;
  	})
	carte.appendChild(titre)
	carte.appendChild(image)
	carte.appendChild(description)
	carte.appendChild(select)
	carte.appendChild(bouton)
	main.appendChild(carte)

	})





