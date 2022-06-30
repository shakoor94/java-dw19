


function test() {
    let a = "test"

}

let a = "test2"

console.log(a)




function moyenne(nombre1, nombre2) {

    let moyenne = (nombre1 + nombre2) / 2
    console.log(moyenne)

}


function moyenne2(nombre1, nombre2) {

    let moyenne = (nombre1 + nombre2) / 2
    console.log(moyenne)

}

function moyenne3(nombre1, nombre2) {

    let moyenne = (nombre1 + nombre2) / 2
    console.log(moyenne)

}


moyenne(10, 12)
moyenne2(8, 10)
moyenne3(6, 4)

let tab = [12, 13, 14, 10, 12];
console.log(tab[2])
console.table(tab)


function moyenneindef(tab) {
    let result = 0
    for (let i = 0; i < tab.length; i++) {
        result = result + tab[i]
    }
    result = result / tab.length
    return result
}
console.log(moyenneindef([12, 14]))
/*

function tableau (tab) {
let temp=tab[0]
tab[0]=tab[1]
tab[1]=temp
return(tab)
} 
console.table(tableau([54,25,40,50,60]))*/


function tab3(tab) {

    return (tab.length)
}
console.table(tab3([54, 25, 40, 50, 60]))

function tab4(tab) {
    let result = 0
    for (b = 0; b < tab.length; b++) {
        result = result + tab[b];


    }
    return result
}
tab = [54, 25, 40, 50, 60]
console.log(tab3(tab))
console.log(tab4(tab));


function tab5(tableau) {
    let REF_MAX = 0
    for (b = 0; b < tab.length; b++) {
        if (tableau[b] > REF_MAX) { REF_MAX = tableau[b]; }

    }
    return REF_MAX

}




function supcinq(tableau) {

    for (let i = 0; i < tableau.length; i++)
        if (tableau[i] > 500) { return tableau[i] }

}

tableau = [54, 2500, 40, 50, 60]
console.log(supcinq(tableau));


function positifou(nb) {


    for (let i = 0; i < nb.length; i++)

        if (nb > 0) ("le nombre est positif")


        else {
            console.error("le nombre est négatif");
        }
    { return "vrai" }
}




tableau = [54, 2500, 40, 50, 60]
console.log(positifou(tableau));



function positifou(nb) {


    if (nb > 0) { Boolean(nb); return true; }

    else {
        { Boolean(nb); return false; }
    }
}

console.log(positifou(-5));


function pair(nb) {


    if (nb % 2 == 0) { Boolean(nb); return true; }

    else {
        { Boolean(nb); return false; }
    }
}

console.log(pair(24));






function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function aleatoire(n) {

    return entierAleatoire(1, n)
}
console.log(aleatoire(5))





function  tablal(){
    tableaux=[]
for (i=0;i<10;i++){
     tableaux[i]=entierAleatoire(1, 100)
    
}
  return tableaux
}
console.table(tablal())


function  tableal2(){
    tableaux2=[]
    n=entierAleatoire(1, 100)

for (i=0;i<n;i++){
     tableaux2[i]=entierAleatoire(1, 100)
    
}
  return tableaux2
}
console.table(tableal2())
