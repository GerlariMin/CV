// On attend le chargement de la page HTML
document.addEventListener("DOMContentLoaded", async function () {
    // Récupération de l'année courante
    let dateCourante = new Date();
    // Âge arrondi = année courante - année de naissance
    let ageActuel = dateCourante.getFullYear() - 1997;
    // On calcule si on est avant le mois d'Avril de l'année courante ou après, pour avoir l'âge approximatif
    if (dateCourante < new Date(dateCourante.getFullYear(), 3, 1)) {ageActuel--;}
    // On ajoute l'âge au span dédié contenant l'id age dans la barre de navigation
    document.getElementById('age').textContent = '(' + ageActuel + ' ans)';
});