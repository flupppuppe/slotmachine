//Diese Funktion wird beim Laden (onload) und bei Aenderung der Bildschirmgroesse (onresize) aufgerufen

// verrutsche Fusszeile nach unten, wenn Bildschirm gross genug
function navpos(){
    // Waehle das erste <div>-Element unterhalb im BODY des Dokumentes
    var MainBox = document.body.getElementsByTagName("div")[0];    
    if (document.getElementById("fusszeile")) {
        var fusszeile = document.getElementById("fusszeile");
		// Verschiebe #fusszeile nach unten, wenn Bildschirm hoch genug ist ( > 670px)
		if (window.innerHeight > (MainBox.offsetHeight + fusszeile.offsetHeight)) {
			fusszeile.style.top = fusszeile.offsetHeight + "px";
		}
		else {
			fusszeile.style.top = "0";
		}
	}
}

function sessionStorageLesen (name) {
	if (typeof sessionStorage === 'object') {
	 try {
		// Wert lesen
		var value = sessionStorage.getItem(name); 		    } 
		catch (e) {
			// alert('Lesen des Wertes war nicht möglich');
		}
	}
	// Wenn value == null dann versuche, den Fenster-Wert zu uebernehmen
	if (! value) {
		if (typeof eval("window." + name) != "undefined") {
			value = eval("window." + name);
		}
		else {
			value = null;
		}
	}
	return value;
}

function sessionStorageSchreiben (name, value) {
	if (typeof sessionStorage === 'object') {
		try {
			// Wert setzen
			sessionStorage.setItem(name, value);
		}
		catch (e) {
			// alert('Schreiben des Werts war nicht möglich');
		}
	}
	// Schreibe ergaenzend in die Fenster-Variable
	eval("window." + name + " = " + value);
	// console.log("window." + name + " = " + value);
}

// zeige das Preloader-Logo beim erstmaligen Betreten der Seite
function logoZeigen (name) {
	if (!sessionStorageLesen("weitererAufruf")) {
		document.getElementById("rossi_logo").style.display = "inline";
		document.getElementById("preloader").style.backgroundColor = "#9933FF";
		// document.getElementById("titelbild_hype_container").style.display = "none";
		sessionStorageSchreiben ("weitererAufruf", "true");
	}
	// else console.log("schon mal geladen");
}



// Initialer Aufruf nach dem Laden der Seite
window.onresize = function () {navpos(); }; 
window.onload = function () {navpos(); }; 
// window.onload = function () {logoZeigen(); }; 