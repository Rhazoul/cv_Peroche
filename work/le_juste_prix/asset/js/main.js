

let button = document.getElementById('button');
let objet = ['Une Chaise Gaming Pro', 'Un Costume Haloween Terrifiant', 'Un Grill Weber', 'Une Guitare ayant appartenue a Francis Cabrel', 'Un Sac à main Louis Vitton'];
let imageObjet = ['image0', 'image1', 'image2', 'image3', 'image4', 'image5'];
let chiffreAlea;
let prix = document.getElementById('prix');
let nomPrix = document.getElementById('nomPrix');
let message = document.getElementById('message');
let guess = document.getElementById('guess').value;
let nbrEssaie = document.getElementById('nbrEssaie');
let prixObjet;
let essaie;
let audio = document.getElementById('audio');
let tentatives;
essaie = 9;

button.addEventListener('click', leJustePrixFinal);

function leJustePrixAlea(max) {

    return Math.floor(Math.random() * max);
}
prixObjet = leJustePrixAlea(100) + 1;
chiffreAlea = leJustePrixAlea(5);

function leJustePrixBegin(chiffreAlea) {
    return '<img src="asset/img/' + chiffreAlea + '.png" class="img-fluid" width="25%" alt="Alors?">';
}
prix.innerHTML = leJustePrixBegin(imageObjet[chiffreAlea]);
nomPrix.innerHTML = objet[chiffreAlea];
function leJustePrixFinal() {
    let guess = document.getElementById('guess').value;


    console.log(prixObjet);
    console.log(essaie);
    if (essaie == 0) {
        message.innerHTML = "Malheusement ce n'était pas la bonne réponse! la valeur d'" + objet[chiffreAlea] + "est de " + prixObjet + "€.";
        audio.innerHTML = '<audio onload="auto" autoplay="autoplay"><source src="asset/mp3/Gandalf Falls Soundtrack.m4a"></audio>';
    } else {
        if (guess == prixObjet) {
            audio.innerHTML = '<audio onload="auto" autoplay="autoplay"><source src="asset/mp3/Will Smith - Men In Black[Official Music Video].m4a"></audio>';
            message.innerHTML = "Bravo !!! En " + (10 - essaie) + " tentatives!";

        }
        if (guess > prixObjet) {
            essaie--;
            message.innerHTML = "C'est moins !";
            nbrEssaie.innerHTML = "Il vous reste " + essaie + " essaie...";
        }
        if (guess < prixObjet) {
            essaie--;
            message.innerHTML = "C'est plus !";
            nbrEssaie.innerHTML = "Il vous reste " + essaie + " essaie...";
        }
    }

}
