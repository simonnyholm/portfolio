//variabler der indeholder dom-elementer

//alle links med klassen "modal-links" (nodelink/array)
let modalLinks = document.querySelectorAll(".modal-link");

//det HTML-element, der udgør selve overlay-vinduet til pop-up
let modalOuter = document.querySelector(".modal-outer");

//Det element, hvor der skal komme tekst i pop-up-vinduet
let modalContent = document.querySelector(".modal-content");




//vi looper igennem alle links
//for hvert link afvikles callback-funktionen
//element peger på det link, hvis tur det
modalLinks.forEach(function (element) {
    //Vi propper en click-event på links og aflyser linkets standard-opførsel
    //event-variablen repræsenterer selve click-eventet
    element.addEventListener("click", function(event){
        event.preventDefault();

        //Vi opsamler linkets href-attribut og gemmer det i en variabel (modalHref)
        let modalHref = element.getAttribute("href");
        
        //Vi bruger variablen som argument i en queryselector for at få det rigtige HTML-indhold
        let modalHTML = document.querySelector(element.getAttribute("href")).innerHTML;

        //Vi propper indholdet ind i pop-up-vinduet
        modalContent.innerHTML = modalHTML;

        //Vi skifter klasse på hele vore modal, så den bliver synlig
        modalOuter.classList.add("open");
    });
});


modalOuter.addEventListener("click", function(){
    modalOuter.classList.remove("open");

})
 
modalContent.addEventListener("click", function(event){
    event.stopPropagation();
})