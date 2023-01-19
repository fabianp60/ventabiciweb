const offerInput = document.getElementById("myoffer-input"); 
const offerLink = document.getElementById("wa-offer-button");
const baseLinkText = "https://wa.me/573006797466?text=Hola%2C%20quiero%20ofertar%20por%20la%20bicicleta%20%24";

function updateOfferLink() {
    offerLink.href = `${baseLinkText}${offerInput.value}`;
}

offerInput.onchange = updateOfferLink;