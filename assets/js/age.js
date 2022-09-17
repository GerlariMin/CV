// On attend que la page se charge
$(document).ready(function() {
    // Âge arrondi à l'année = date courant - année de naissance
    let ageActuel = new Date().getFullYear() - 1997;
    // On ajoute l'âge au span dédié contenant la classe age dans la barre de navigation
    $('.age').text('(' + ageActuel + ' ans)');
});