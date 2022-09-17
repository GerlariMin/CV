// On attend que la page se charge
$(document).ready(function() {
    // Année de publication du site
    let anneePublication = 2022;
    // On récupère l'année courante
    let anneeCourante = new Date().getFullYear();
    // Si l'année courante est supérieure à l'année de publication d'origine, on l'affiche dans le span du pieds de page dédié
    if(anneeCourante > anneePublication) {
        $('.anneeCopyright').text(' - ' + anneeCourante);
    }
});