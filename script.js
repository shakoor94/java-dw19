console.log("test")

/*
commentaire :
Nous allons apprendre
1. les variables 
2. les conditions
3. les boucles
4.les fonctions
*/

//les variables

/*
stoker des données 
*/
a=10
b=50
c="80"
b=90
console.error(a+b)
console.error(typeof(c))

SEL=100
SUCRE=80

console.error ("Nous avons du SEL en Q. de " + SEL + ". Nous avons du sucre en quantité de " + SUCRE)

// exo 01 VOTRE CODE INVERSE LES VARIABLES 

tmp=SEL
SEL=SUCRE
SUCRE=tmp
console.error ("Nous avons du SEL en Q. de " + SEL + ". Nous avons du sucre en quantité de " + SUCRE)


/* EXO 2
Récup l'age de l'utilisateur via la commande prompt
affichez l'age dans la console
affiche quel age aura l'ulisateur dans 2 ans */

age = prompt("quel age as tu ?");

console.info ("l'utilisateur a " + age + " ans");

A=29
B=A+2
console.info ("l'utilisateur aura " +  B + " ans");


prix = prompt("quel est le prix ?");

console.error("l'article vaut " + prix + " euros")

prixtva=parseInt(prix) * 1.2;

console.error("l'article vaut " + prixtva + " euros TTC")

date = new Date();
console.log("Nous sommes le " + date + ",")

day = date.getDate();
mois= date.getMonth()
année= date.getFullYear();

console.log("Nous sommes le " + date + ", " + mois + ", " + anneé + "")