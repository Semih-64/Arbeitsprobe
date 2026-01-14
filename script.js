function zeige(dokument) {
// Alle Bilder ausblenden
    document.getElementById('anschreiben').style.display = 'none';
   	 document.getElementById('lebenslauf').style.display = 'none';
   		 document.getElementById('zeugnis').style.display = 'none';

// Nur das angeklickte Bild anzeigen
  	 document.getElementById(dokument).style.display = 'block';
}