
const table = document.getElementById('table');
const valider = document.getElementById('valider');
let valeur1 = parseInt(0);
let valeur2 = parseInt(0);


let head = `<th>Facteurs</th><th>Coéficients</th><th><input type="text" name="element1" class="elements" placeholder="élément1"></th><th><input type="text" name="element2" class="elements" placeholder="élément2"></th>`;

table.innerHTML = head;
valider.onclick = function(){
  
    const newDesignation = document.getElementById('Facteur');
    const newQuantite = document.getElementById('Coéficient');
    const newPrixUnitaire = document.getElementById('element1');
    const newPrixTotal = document.getElementById('element2');

    //calcul de valeurs finales
    if(!isNaN(newQuantite.value)  && !isNaN(newPrixUnitaire.value) && newPrixUnitaire.value > 0 && newQuantite.value > 0){

        valeur1 = parseInt(valeur1) + parseInt(newQuantite.value * newPrixUnitaire.value);
        valeur2 = parseInt(valeur2) + parseInt(newQuantite.value * newPrixTotal.value);

        let content = `<tr><td>${newDesignation.value}</td><td>${newQuantite.value}</td><td>${newPrixUnitaire.value}</td><td>${newPrixTotal.value}</td></tr>`;

        valider.style.backgroundColor = "green";
        valider.style.color = "azure";
        if(newDesignation.value != "" && newQuantite.value != "" && newPrixUnitaire.value != ""){
            let basTable = `<tr><td colspan = 2>Valeurs finales</td><td id="val1">${valeur1}</td><td id="val2">${valeur2}</td></tr>`;
            head = head + content;
            table.innerHTML = head + basTable;

            if(valeur1 > valeur2){
                
            }else if(valeur2 > valeur1){
                
            }

            // Réinitialiser les valeurs des inputs pour évité que l'utilisateur n'ai à tout éffacer de lui même.
            newDesignation.value= "";
            newPrixTotal.value= "";
            newPrixUnitaire.value= "";
            newQuantite.value = "";
        }
        else{
            alert("bien vouloir renseigner les differents champs svp!");
        }
    }
    else{
        alert("se rassurer que les valeurs des champs soient correctement remplis !");
    }
}
// Pour actualiser automatiquement
//window.location.reload()