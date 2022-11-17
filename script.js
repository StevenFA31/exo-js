/********* I - Les boucles *********/

/* EXERCICE 1 */

/* var valeur = 0;
while(valeur <= 10) {
	console.log(valeur);
	valeur = valeur + 1;
} */

/* EXERCICE 2 */

/* 

var premiere = 0;
var deuxieme = 59;

while(premiere < 20) {
    premiere = premiere * deuxieme;
    console.log(premiere);
    premiere = premiere + 1;

} */

/* EXERCICE 3 */

/* 

var first = 100 
var second = 1

while(first >= 10) {
    first = first * second;
    console.log(first)
    first = first - 1;
} 

*/

/* EXERCICE 4 */

/* var number = 1

while (number < 10){
    console.log(number)
    number = number / 2 + number 
} /*

/* EXERCICE 5 */

/* for (let i = 1 ; i <= 15 ; i++){
    console.log("On y arrive presque ... ")
} */

/* EXERCICE 6 */

/* for (let i = 20 ; i >= 0; i-- ){
    console.log("C'est presque bon ... ")
}  */

/* EXERCICE 7 */ 

/* for (let i = 1 ; i <= 100; i = i + 15){
    console.log("On tient le bon bout ... ")
} */

/* EXERCICE 8 */

/* for (let i = 200 ; i >= 0 ; i = i - 12){
    console.log("Enfin !!!")
} */

/********* II - Les fonctions *********/

/* EXERCICE 1 */

/* function test(name){
     prompt("What is your name ?")
    if (name = "steven" ){
        console.log("true")
} else {
    console.log("false")
}
}

test(); */

/* EXERCICE 2 */

/* function voiture(annee, model){
	console.log('MA voiture est de ' + annee );
    
} 

voiture("2005") */

/* EXERCICE 3 */

/* function voiture(annee, model){
	console.log('MA voiture est de ' + annee + " et c'est une " + model);
    
}

voiture("2005", "GTR") */

/* EXERCICE 4 */

/* function nombre(premier, deuxieme){
    if (premier > deuxieme){
        console.log("Le premier nombre est plus grand.")
    }else if(premier < deuxieme){
        console.log("Le premier nombre est plus petit.")
    } else {
        console.log("les deux nombres sont identiques.")
    }
    return nombre
}

nombre("12", "14") */

/* EXERCICE 5 */

/* function relou(lettre, chiffre){
console.log(lettre, chiffre)
    return relou
}

relou("une lettre et ", "1") */

/*EXERCICE 6 */

/* function personne(nom, prenom, age){
    console.log("Bonjour " + nom + " " + prenom + " , tu as " + age + " ans.")
    return personne
}

personne("FERREIRA ALVES", "Steven", "21") */

/* EXERCICE 7 */

/* function personne(age, genre){
    if (age >= 18 || genre == "homme"){
        console.log("Vous êtes un homme et vous êtes majeur")
    } else if(age < 18 || genre == "homme"){
        console.log("Vous êtes un homme est vous êtes mineur")
    } else if (age >= 18 || genre == "femme"){
        console.log("Vous êtes une femme est vous êtes majeur")
    } else {
        console.log("Vous êtes une femme est vous êtes mineur")
    }
    return personne
} 

personne(16, "femme") */

/* EXERCICE 8*/

/* function kette(premier = 12, deuxieme = 31, troisieme = 4){
console.log(premier,deuxieme,troisieme)
    return kette
}

kette() */

/********* III - Les tableaux *********/

/* EXERCICE 1 */

const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout",
 "Septembre", "Octobre", "Novembre", "Décembre"]

/* EXERCICE 2 */

console.log(mois[2])

/* EXERCICE 3 */

console.log(mois[5])

/* EXERCICE 4 */

mois[7] = "Août";

/* EXERCICE 5 */


