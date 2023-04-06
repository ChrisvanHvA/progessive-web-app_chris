# Progessive Web app
## Chris Gabriel III - 500849088

### Beschrijving

In deze repository vind je de Portfolio die ik eerder gemaakt had, maar dan geoptimaliseerd met Node, ExpressJS, server side rendering en het gebruik van service workers.

De leerdoelen voor dit project zijn:

-Publishen van een Progressive web app
-Server side renderen van content
-Optimaliseren van je critical rendering path



## Voortgang logboek

### week 1 - kickoff
in de eerste week heb ik de opdracht gekregen om te werken met de Web app die ik eerder had gemaakt voor WAFS te verwerken naar een server sided project, omdat mijn web app niet echt makkelijk opgesplitst kon worden heb ik er voor gekozen om mijn portfolio op te splitsen.

Op de eerste dag begon ik met de npm packages te downloaden.
daarna ben ik de content van de website gaan opsplitsen in aparte EJS bestanden.

Door middel van Nodefetch heb ik de info uit de api in de console kunnen ophalen.


### week 2 - Activity diagram - server side rendering
Deze week heb ik me verdiept in het toepassen van de server en het renderen van API info in de server
Uiteindelijk is het me gelukt om de API van github te fetchen en de informatie te displayen op mijn webpagina's, om de info binnen de api te halen die dieper zit heb ik een aparte api call gemaakt voor de repositories van github.
    ![first scores](image.jpg)
De eerste activity diagram laat zien hoe de website nu zou functioneren wanneer je een pagina laad, alle informatie moet nu door je browser opgehaald worden voordat het uitgevoerd kan worden, dit zorgt ervoor dat gebruikers vaak langer moeten wachten voordat ze op de content kunnen zien
    ![first scores](image.jpg)
    de tweede laat zien hoe een service worker de network load kan verminderen voor terugkerende gebruikers doormiddel van cachen van bestanden en het fetchen van al gecachede files, de network load gaat hierdoor drastisch omlaag.

### week 3 - Service worker, Lighthouses score
in  de laatste week heb ik mijn best gedaan om nog een service worker toe te voegen, de service worker cached een aantal grote bestanden en zorgt ervoor dat als er iemand terug op de site komt deze bestanden weer opgehaald worden uit de cache ipv weer opgehaald te moeten worden van de server, dit verlaagd data usage en zorgt ervoor dat de pagina sneller laad en beter werkt wanneer de gebruiker offline is.
	![first scores](image.jpg)
    ![first scores](image.jpg)

Bij de eerste audits kwam ik er achter dat er nog veel mis was met mijn web app, ik miste nog veel icons om de website te optimizen voor downloaden, ik miste splash icons, ios optimization, en load screen colors, ook was mijn score voor de site over het algemeen laag omdat ik grote images in aan het laden was en veel bestandtypes had die niet geoptimized waren voor web.

na het updaten was mijn algemene score een stuk beter voor alle delen.
    ![first scores](image.jpg)