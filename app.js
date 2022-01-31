// Gérer l'apparition du menu responsive

const menuResponsive = document.querySelector('.toggle-menu');
const iconeToggle = document.querySelector('.icone-toggle');


iconeToggle.addEventListener('click', handleclick);

function handleclick() {
    
    menuResponsive.classList.toggle('hidden');
}

// Apparition fenêtre modale pour numéro de téléphone

const modal = document.getElementById('myModal')
const btn = document.getElementById('btnModal');

// Faire apparaître la fenêtre modale
btn.onclick = function() {

    modal.classList.remove('hidden');
}

// Faire disparaître la fenêtre modale
window.onclick = function(event) {
    if(event.target == modal) {
        modal.classList.add('hidden');

    }
}


