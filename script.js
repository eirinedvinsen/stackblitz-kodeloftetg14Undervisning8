console.log('Hello!');
/*Setter opp en funksjon med navnet clickButton som tar en blokk med kode som skal gjøres samtidig*/
function clickButton () {
   /*Lager en variabel med navnet h1Element som henter et element fra HTML med id-navn changeText*/ 
   const h1Element = document.getElementById("changeText"); //document.querySelector("#changeText")

   /*Logger variabelen h1Element til console for å sjekke at vi henter riktig HTML element*/
   console.log(h1Element);
   
   /*Lager en variabel med navnet newText som lagrer en string med tekst.*/
   const newText = "Velkommen til min side!"; 

   /*Variabelen h1Element for tekst innhold fra variabelen newText */
   h1Element.textContent = newText;
}

/*Lager en variabel med navnet buttonELement som henter element fra HTML med id-navn "button" og logger buttonElementet til console for å se om det er riktig */
const buttonElement = document.getElementById("button");
console.log(buttonElement);

/*Bruker variabelen buttonElement for å legge til en hendelse osm lytter etter et klikk og kjører funksjonen clickButton */
buttonElement.addEventListener("click", clickButton);

/*function  ? () {
   const ? = document.getElementByID("?"); 
   const ? = "?";

   ?.textContent = ?; 
}*/

//
//

const addText = document.getElementById("addText");
console.log(addText);

addText.addEventListener("click", function (){
   console.log("Button clicked?");
   const recieveText = document.getElementById("recieveText");
   const text = "String";
   recieveText.textContent = text;
});

const headLine = document.getElementById("headLineButton");

headLineButton.addEventListener("click", function(){
   console.log("Worked");
   const headLine = document.getElementById("headLine");
   const newHeadertext = "It works!";
   headLine.textContent = newHeadertext; 
});

const knapp = document.getElementById("knapp");

knapp.addEventListener("click", function(){
   console.log("Hihi");
   const overskrift = document.getElementById("overskrift");
   const newHeadline = "MEEER!!!!";
   overskrift.textContent = newHeadline;
});

knappEn.addEventListener("click", function(){
   console.log("Hoho");
   const knappEN = document.getElementById("knappEn");
   const nyKnappEn = "Trykk trykk trykk";
   knappEN.textContent = nyKnappEn;
});

knappTo.addEventListener("click", function(){
   console.log("Haha");
   const knappTo = document.getElementById("knappTo");
   const nyKnappTo = "IGJEN!";
   knappTo.textContent = nyKnappTo;
});

knappTre.addEventListener("click", function(){
   console.log("Jaja");
   const knappTre = document.getElementById("knappTre")
   const nyKnappTre = "Tredje gang og!";
   knappTre.textContent = nyKnappTre;
});

logo.addEventListener("click", function(){
   console.log("Button clicked");
   const logo =document.getElementById("logo");
   const nyLogo = "FU!";
   logo.textContent = nyLogo;
});

const changeTxt = document.getElementById("changeTxt");

changeTxt.addEventListener("click", function(){
   console.log("Clickclickclik");
   const newText = document.getElementById("newText");
   const txt = "Where did it go?!";
   newText.textContent = txt;
});

const changes = document.getElementById("changes");
changes.addEventListener ("click", function(){
   console.log ("works");
   const chchanges = document.getElementById ("chchanges");
   const slimshady = "Real Slimshady";
   chchanges.textContent = slimshady; 
});

botanIchi.addEventListener ("click", function(){
   console.log ("Heisei");
   const botanIchi = document.getElementById ("botanIchi");
   const botanChi = "Botan Ichi";
   botanIchi.textContent = botanChi;
});

botanNi.addEventListener ("click", function(){
   console.log ("Okinawa");
   const botanNi = document.getElementById ("botanNi");
   const botanGo = "Botan Ni";
   botanNi.textContent = botanGo;
});

botanSan.addEventListener("click", function(){
   console.log ("Nihongo");
   const botanSan = document.getElementById ("botanSan");
   const botanRoku = "Botan San";
   botanSan.textContent = botanRoku; 
});

const backToBlack = document.getElementById("backToBlack");

backToBlack.addEventListener("click", function(){
   console.log ("Againagainagain");
   const h3 = document.getElementById("h3");
   const logo = "Ny Logo";
   h3.textContent = logo;
});