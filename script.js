async function teddiesApi(){//requette get
    const response= await fetch('http://localhost:3000/api/teddies/');//on attend la reponse de la requette
    const teddies= await response.json();
    let error;
    console.log(teddies);
    if (response.ok){

        //code a exécuter si la reponse est correcte
        for(let i=0;i<=teddies.length;i++){//boucle de création des 

            //récupération des valeur
            let img = teddies[i].imageUrl;
            let name = teddies[i].name;
            let price = teddies[i].price;
            let id = teddies[i]._id;

            // création des éléments pour organiser le contenu 
            let card = document.createElement ("div");
            card.className = 'card mb-3 col-10 col-md-3 col-lg-4';
            let imgdiv = document.createElement ("img");
            imgdiv.className = 'card-img-top';
            let namediv = document.createElement ("h4");
            namediv.className = 'card-title'
            let pricediv = document.createElement ("div");
            pricediv.className = 'card-text'
            let btn = document.createElement ("button");
            let main = document.querySelector ("main");
            main.className = 'container'
       
       		// ajout de contenu pour le bouton 
       		btn.textContent = 'Description';
       		btn.className = 'btn btn-secondary';

       		//ajout de l'evenement "clique"
       		btn.addEventListener('click', function(){
       			localStorage.setItem ("id", id);
       			location.href= 'product.html' ;
       		});

       		//ajout des elements à l'index.html
       		namediv.textContent = name;
       		pricediv.textContent = price;
       		imgdiv.setAttribute ("src", img)
       		main.append (card)
       		card.append (imgdiv)
       		card.append (namediv)
       		card.append (pricediv)
       		card.append (btn)
       		
       	}
    }else{//code a exécuter si la requete GET échou
        
        throw error=new Error('erreur de connexion au serveur');
        
    }
    
}
teddiesApi().catch(error=>console.error(error));//appel de notre requete