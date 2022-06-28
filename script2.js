age = prompt("Veuillez indiquer votre âge ?");
age = parseInt(age);

if (age > 18) {

    console.error("Vous êtes majeur");
}

if (age < 18) {
    console.error("Vous êtes mineur");

}

if (age==18){ 
    console.error("Vous êtes majeur");
}

nombre = prompt("Vous indiquer un nombre");
nombre= parseInt(nombre);

if (nombre > 0) {
    console.error("le nombre est positif");
}

if (nombre < 0) {
    console.error("le nombre est négatif");
}

nombre = prompt("Vous indiquer un nombre");
nombre= parseInt(nombre);

if (nombre %2==0) {
    console.error("le nombre est pair")
}

else {
    console.error("le nombre est impair")
}