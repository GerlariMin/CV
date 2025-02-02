// On attend le chargement de la page HTML
document.addEventListener("DOMContentLoaded", async function () {
    // Année de publication du site
    let anneePublication = 2022;
    // On récupère l'année courante
    let anneeCourante = new Date().getFullYear();
    // Si l'année courante est supérieure à l'année de publication d'origine, on l'affiche dans le span du pieds de page dédié ayant l'id anneeCopyright
    if(anneeCourante > anneePublication) {
        document.getElementById('anneeCopyright').textContent = ' - ' + anneeCourante;
    }
});