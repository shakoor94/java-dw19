
function mafonction() {
    console.error("je teste ma première fonction");
}

mafonction();

function helloworld() {
    alert("Hello world");
}

helloworld();

function recup_age() {


    age = prompt("Veuillez entré votre âge ?");
    console.error(typeof (age))

    AGEPLUSDEUX = parseInt(age) + 2
    console.error("L'utilisateur aura " + AGEPLUSDEUX + " ans")

}

recup_age()

function afficher(prenom) {
    console.info("Bonjour " + prenom)
}
afficher("Shakoor")

function numerique(nombre) {

    nb = nombre + 2
    console.info("Affchez " + nb);

}

numerique(10)

function positif(nombre) {
    if (nombre > 0) {
        console.error("le nombre est positif")
    }

    else {
        console.error("le nombre est négatif")
    }
}

 
    function pair(nombre) { 

if (nombre % 2 == 0) {
    console.error("le nombre est pair")
}

else {
    console.error("le nombre est impair")
}
}
