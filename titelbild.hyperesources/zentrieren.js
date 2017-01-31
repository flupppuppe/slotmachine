//Diese Funktion wird beim Laden (onload) und bei Aenderung der Bildschirmgroesse (onresize) aufgerufen
function zentrieren(){
    // http://www.vektorkneter.de/html-element-vertikal-zentrieren-mit-jquery/
 
    //Mindest-Randabstand definieren
    var MinimumMargin = 0;
     
    //Vertikaler Offset (Pixel, um die das Element nach oben aus der Mitte verschoben wird)
    // var YOffset = 40;
    // Anders: mit Längenverhältnis
    var ObenZuUntenRatio = 0.7;
     
    // Waehle das erste <div>-Element unterhalb im BODY des Dokumentes
    var CenterBox = document.body.getElementsByTagName("div")[0];
    // Alternativ: waehle mit id = "centerbox" benanntes Element aus
    // var CenterBox = document.getElementById("centerbox");
    
    var leftmargin = parseInt((window.innerWidth - parseInt(CenterBox.style.width)) / 2);
    var topmargin = parseInt((window.innerHeight - parseInt(CenterBox.style.height)) / 2);
 
    //Vertikalen Offset anwenden
    // topmargin = topmargin - YOffset;
    // Anders: mit Längenverhältnis
    topmargin = topmargin * ObenZuUntenRatio;
 
    //Viewport Overflow verhinden, Mindest-Randabstand anwenden
    if(leftmargin <= MinimumMargin) {leftmargin = MinimumMargin;}
    if(topmargin <= MinimumMargin) {topmargin = MinimumMargin;}
 
    //Errechnete Werte anwenden
    CenterBox.style.position = 'absolute';
    CenterBox.style.left = leftmargin + "px";
	CenterBox.style.transition = "top 0.5s ease-in-out";
    CenterBox.style.top = topmargin + "px";

    // alert(topmargin);
    
    // verrutsche Fusszeile wenn Bildschirm zu klein
    
    if (document.getElementById("fusszeile")) {
        var fusszeile = document.getElementById("fusszeile");
		if (window.innerHeight < (CenterBox.offsetHeight + fusszeile.offsetHeight)) {
			fusszeile.style.transition = "top 0.5s ease-in-out";
			fusszeile.style.top = "-40px";
		}
		else {
			fusszeile.style.top = "0px";
		}
		// console.log("Inhalt: "+parseInt(CenterBox.style.height));
		// console.log("Fusszeile: "+parseInt(fusszeile.style.height));
    }
    
};

// Initialer Aufruf nach dem Laden der Seite
window.onresize = function () {zentrieren(); }; 
window.onload = function () {zentrieren(); }; 