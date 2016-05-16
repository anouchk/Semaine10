$bouton = document.getElementById("bouton");
$affichage = document.getElementById("affichage");
$multiplicateur = document.getElementById("multiplicateur");
var compteur1;
var score = 0;
var compteur = 1;

var afficherScore = function() {
	$affichage.innerHTML = "Score : " + score;
}

var ajoute = function() {
    score += compteur;
    afficherScore();
}

var afficherAutoclick= function() {
    if (prix() == 200) {
        $multiplicateur.innerHTML = "Multiplicateur : x" + compteur + " (Le prochain te coûtera : " + prix()  + " pts)" + " BONUS : Bouchées doubles !";
    } else if (prix() == 700) {
    	$multiplicateur.innerHTML = "Multiplicateur : x" + compteur + " (Le prochain te coûtera : " + prix()  + " pts)" + " BONUS : Bottes de sept lieues !";
	}
}

var afficherCompteur = function() {
    $multiplicateur.innerHTML = "Multiplicateur : x" + compteur + " (Le prochain te coûtera : " + prix() + " pts)";
}


var prix = function() {
    return 50 * compteur;
}

var incremente = function() {
	if (score >= prix()) {
		score -= prix();
		compteur += 1;
		afficherCompteur();
		afficherScore();
		afficherAutoclick();
		autoclick();
	} else {
		alert("Score insuffisant... too bad, essaie encore !");
	}
}

var autoclick = function() {
    if (prix() == 250) {
        compteur1 = setInterval( function() { 
            score += compteur;
            afficherScore(); }
            , 1000);
    } else if (prix() == 750) {
        clearInterval(compteur1);
        setInterval( function() { 
            score += compteur;
            afficherScore(); }
            , 500);
    }
}

$bouton.onclick = ajoute;	
$multiplicateur.onclick = incremente;
afficherCompteur(); 
afficherScore();