function mafonction(){
    alert ("vous avez cliqué sur le boutton ! ");

    document.getElementById("montexte"). value ="La valeur qui m'inteesse"
    document.getElementById("monboutton"). value ="Bouton clique"
    document.getElementById("madiv"). value ="ma div a été changé"
}

console.error(document.getElementById("montexte"))
console.error(document.getElementById("monboutton"))
console.error(document.getElementById("madiv"))



function alert2(){
    alert("Bienvenue sur le boutton ! ")
    alert(    document.getElementById("boutton").value     )
    document.getElementById("madiv").innerHTML=document.getElementById("montexte").value
    document.getElementById("madiv").innerHTML="Le texte contient : " +  document.getElementById("montexte").value
    RESULT=parseInt(document.getElementById("montexte").value) *0.2
    document.getElementById("madiv").innerHTML="Le prix est  : " +  parseInt(document.getElementById("montexte").value) + "La TVA est   " + RESULT
}








function mafonction2 () {
    document.getElementById("madiv").innerHTML=document.getElementById("montexte").value


   
document.getElementById("montexte").addEventListener(  "input", mafonction2       )

document.getElementById("monboutton").addEventListener(  "click", mafonction       )
document.getElementById("boutton").addEventListener(  "click", alert2       )
   
   
}
 document.getElementById("monboutton").addEventListener( "click", mafonction3 )

function mafonction3 () {

compteur=parseInt(document.getElementById("madiv2").innerHTML)
compteur=compteur+1
document.getElementById("madiv2").innerHTML=compteur

}
   /*CREEZ UNE FONCTION 
 * 
 * 1. REFLECHIR A LA QUESTION
 * 2. QUEL EST L EVENEMENT ?  CLICK
 * 3. SUR QUEL ELEMENT HTML L EVENEMENT SE DECLENCHE ? BOUTON
 * 4. CODEZ LE ADDEVENTLISTNER
 * 5. CREEZ LA FONCTION CORRESPONDANT
 * 6. QUELS SONT / EST L ELEMENT HTML DONT VOUS AVEZ BESOIN 
 * 6. APPLIQUER SUR LES CHAMPS HTML CE QUI EST DEMANDE
 * 
 */


document.getElementById("boutton4").addEventListener("click",   mafonction4   )

function mafonction4(){
   // 1 RECUPERER LE CHAMPS INPUT AGE DANS LA VARIABLE AGE
    age= parseInt(document.getElementById("age").value)


   // 2 CONDITION TESTER SI L AGE EST > ou < 
   if (age > 18 ) {
       document.getElementById("madiv2").innerHTML="vous etes majeur"
       console.error("vous etes majeur")
   }
   else {
    document.getElementById("madiv2").innerHTML="vous etes mineur"

       console.error("vous etes mineur")
   } 

}

document.getElementById("boutton5").addEventListener("click",   mafonction5  )

function mafonction5() {
  
nombre

document.getElementById("madiv3"  ).innerHTML="Table de  " + nombre

    for (u=1;u<10;u++) {
        document.getElementById("madiv3"  ).innerHTML+= "<br />" + numero+"*"+u+"="+(nombre * u)
        console.error(u)
    }

}
   /*
document.getElementById("SOMME_boutton").addEventListener("click", sommef)
function sommef(){
    // 1 DE QUOI ON A BESOIN  CHAMP TEXTE
    nb=parseInt(document.getElementById("SOMME_texte").value)




    // On affiche dans la div LE NOMBRE DE 5 + 4 + 3 +2 +1 

 SOMME=0

    for (i=1; i<=nb ; i++    ){
        SOMME=SOMME+i

        document.getElementById("SOMME_div").innerHTML+=i+" + "

    }

    document.getElementById("SOMME_div").innerHTML+= " = " +  SOMME




}*/

document.getElementById("SOMME_boutton").addEventListener("click", sommef)
function sommef(){
    // 1 DE QUOI ON A BESOIN  CHAMP TEXTE
    nb=parseInt(document.getElementById("SOMME_texte").value)




    // On affiche dans la div LE NOMBRE DE 5 + 4 + 3 +2 +1 

    SOMME=1

    for (i=1; i<=nb ; i++    ){
        SOMME=SOMME*i

        document.getElementById("SOMME_div").innerHTML+=i+"*"

    }

    document.getElementById("SOMME_div").innerHTML+= " = " +  SOMME



}