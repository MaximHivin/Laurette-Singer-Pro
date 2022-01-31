// Gérer l'apparition du menu responsive

const menuResponsive = document.querySelector('.toggle-menu');
const iconeToggle = document.querySelector('.icone-toggle');


iconeToggle.addEventListener('click', handleclick);

function handleclick() {
    
    menuResponsive.classList.toggle('hidden');
}

// Méthode pour faire disparaître le menu dropdown au 
// clic sur n'importe quel lien du menu

const allLinks = document.querySelectorAll('#item-link');

allLinks.forEach(function(item){
   
    item.addEventListener('click', function(){
        menuResponsive.classList.add('hidden');
    })
})


// Vérificafion du bon chargement du JS
document.addEventListener('DOMContentLoaded', init);

function init() {
	console.log('La page est bien chargée!');
}


