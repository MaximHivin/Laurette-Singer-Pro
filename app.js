// Gérer l'apparition du menu responsive

const menuResponsive = document.querySelector('.toggle-menu');
const iconeToggle = document.querySelector('.icone-toggle');


iconeToggle.addEventListener('click', handleclick);

function handleclick() {
    
    menuResponsive.classList.toggle('hidden');
}


// Vérificafion du bon chargement du JS
document.addEventListener('DOMContentLoaded', init);

function init() {
	console.log('La page est bien chargée!');
}


