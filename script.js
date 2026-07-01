function changeSkill(skill){

  const skills =
document.querySelectorAll(".skill");

skills.forEach(item => {
    item.classList.remove("active");
});
  
    const title =
    document.getElementById("skillTitle");

    const description =
    document.getElementById("skillDescription");

    const showcase =
    document.getElementById("showcaseImage");

    if(skill === "character"){

        title.innerText =
        "Character Design";

        description.innerText =
        "Entwicklung eigener Charaktere, Konzepte und Designs für kreative Projekte.";

        showcase.innerText =
        "CHARACTER DESIGN";
    }

    if(skill === "illustration"){

        title.innerText =
        "Digital Illustration";

        description.innerText =
        "Digitale Zeichnungen und Illustrationen mit Fokus auf Charaktere und visuelle Gestaltung.";

        showcase.innerText =
        "DIGITAL ILLUSTRATION";
    }

    if(skill === "3d"){

        title.innerText =
        "3D Modelling";

        description.innerText =
        "Erstellung von 3D-Modellen und Assets mit Blender.";

        showcase.innerText =
        "3D MODELLING";
    }

    if(skill === "animation"){

        title.innerText =
        "Animation";

        description.innerText =
        "Grundlagen der Animation und Bewegungsdarstellung für digitale Medien.";

        showcase.innerText =
        "ANIMATION";
    }

    if(skill === "web"){

        title.innerText =
        "Web Design";

        description.innerText =
        "Gestaltung moderner Webseiten mit Fokus auf Benutzerfreundlichkeit und Ästhetik.";

        showcase.innerText =
        "WEB DESIGN";
    }

    if(skill === "uiux"){

        title.innerText =
        "UI/UX Basics";

        description.innerText =
        "Erste Erfahrungen in Interface Design, Nutzerführung und User Experience.";

        showcase.innerText =
        "UI / UX";
    }
}

/*======================================
DORAKUTASAN SKINS
======================================*/

const skins = [

{
    name: "Dorakutasan",
    subtitle: "LEAGUE COLLECTION",
    description: "Inspiriert von Setts unaufhaltsamer Kampfeslust verkörpert Dorakutasan pure Entschlossenheit und den unerschütterlichen Glauben daran, jede Herausforderung überwinden zu können. Als Kämpferin schreckt sie vor keinem Gegner zurück und begegnet jedem Hindernis mit Mut, Disziplin und einem eisernen Willen. Jeder Kampf ist für sie eine Gelegenheit, stärker zu werden und über sich hinauszuwachsen. Dieses Design ist die ursprüngliche Version von Dorakutasan und bildet die Grundlage für alle späteren Varianten, die unterschiedliche Seiten ihrer Persönlichkeit und ihrer Leidenschaften widerspiegeln.",
    inspiration: "✦ DESIGN INSPIRED BY LEAGUE OF LEGENDS",
    image: "images/Dorakutasan Normal.png",
    thumb: "images/Dorakutasan icon.png"
},

{
    name: "Splash Showdown",
    subtitle: "LEAGUE COLLECTION",
    description: "Wenn die Sonne am höchsten steht, tauscht Splash Showdown das Schlachtfeld gegen den Strand. Mit einem kühlen Drink in der Hand genießt sie die Ruhe im Schatten, immer bereit, den perfekten Moment auszukosten. Doch der entspannte Eindruck täuscht: Beginnt die Wasserschlacht, stürzt sie sich ohne zu zögern ins Getümmel und sorgt mit ihrer energiegeladenen Art dafür, dass niemand trocken bleibt.",
    inspiration: "✦ DESIGN INSPIRED BY LEAGUE OF LEGENDS",
    image: "images/Pool Party Dorakutasan.png",
    thumb: "images/Pool Party icon.png"
},

{
    name: "Ryū no Mai",
    subtitle: "LEAGUE COLLECTION",
    description: "Mit der Energie traditioneller Drachentänze bringt Ryū no Mai jede Feier zum Leuchten. Wo sie auftaucht, erfüllen Funken, Feuerwerke und leuchtende Farben den Himmel. Zwischen den Feierlichkeiten genießt sie es, eine Portion Gyoza zu essen und das Feuerwerk in aller Ruhe zu beobachten. Für sie gehören ausgelassene Feste und entspannte Momente untrennbar zusammen.",
    inspiration: "✦ DESIGN INSPIRED BY LEAGUE OF LEGENDS",
    image: "images/Firecracker Dorakutasan.png",
    thumb: "images/Firecracker Dora icon.png"
},

{
    name: "Sakura Spirit",
    subtitle: "LEAGUE COLLECTION",
    description: "Während des Sakura Spirits Festivals, wenn die Grenze zwischen der Welt der Lebenden und dem Geisterreich verschwindet, erscheint Sakura Spirit als stille Begleiterin zwischen beiden Welten. Zwischen blühenden Kirschblüten und uralten Schreinen führt sie rastlose Seelen auf ihrem Weg zu Frieden und Versöhnung. Sie erinnert daran, dass selbst nach Verlust Hoffnung wachsen kann und jede Seele ihren Platz finden wird.",
    inspiration: "✦ DESIGN INSPIRED BY LEAGUE OF LEGENDS",
    image: "images/Spirit Blossom Dorakutasan.png",
    thumb: "images/Spirit Blossom Dora icon.png"
},

{
    name: "Last Challenger",
    subtitle: "LEAGUE COLLECTION",
    description: "Für Last Challenger ist jeder Kampf eine Bühne. Mit blitzschnellen Reflexen, spektakulären Combos und ihrem unverwechselbaren Kampfstil stellt sie sich jedem Gegner entgegen. Doch endet das Turnier, zieht es sie direkt vor die Konsole, wo sie ihre Fähigkeiten in Fighting Games weiter perfektioniert. Ob in der Arena oder Zuhause. Aufgeben kommt für sie niemals infrage.",
    inspiration: "✦ DESIGN INSPIRED BY LEAGUE OF LEGENDS",
    image: "images/Soul Figther Dorakutasan.png",
    thumb: "images/Soul Figther Dora icon.png"
},

{
    name: "Mind Over Matter",
    subtitle: "VALORANT COLLECTION",
    description: "Als brillante Erfinderin löst Mind Over Matter jedes Problem mit Köpfchen statt roher Gewalt. Mit ihren selbst entwickelten Gadgets kontrolliert sie jede Situation und ist ihren Gegnern stets einen Schritt voraus. Außerhalb des Schlachtfeldes verbringt sie ihre Zeit als leidenschaftlicher Nerd mit Videospielen, Technik und neuen Projekten. Für sie ist jede Herausforderung ein Rätsel, das nur darauf wartet gelöst zu werden.",
    inspiration: "✦ DESIGN INSPIRED BY VALORANT",
    image: "images/Killjoy Dorakutasan.png",
    thumb: "images/Killjoy Dora icon.png"
},

{
    name: "Scrap Chaos",
    subtitle: "OVERWATCH COLLECTION",
    description: "Scrap Chaos lebt für Chaos, Explosionen und jede Menge Schrott. Mit verrückten Ideen baut sie aus allem, was herumliegt, die ungewöhnlichsten Konstruktionen. Vorausschauendes Denken gehört zwar nicht zu ihren größten Stärken, doch genau ihre unberechenbare Art macht sie so gefährlich. Wo andere ein Problem sehen, sieht sie bereits die nächste große Explosion.",
    inspiration: "✦ DESIGN INSPIRED BY OVERWATCH",
    image: "images/Junkrat Dorakutasan.png",
    thumb: "images/Junkrat Dora icon.png"
},

{
    name: "Rampage Rabbit",
    subtitle: "VALORANT COLLECTION",
    description: "Rampage Rabbit bewegt sich mit unglaublicher Geschwindigkeit durch jede Situation. Hinter ihrem verspielten Auftreten verbirgt sich jedoch ein unberechenbarer Kampfstil. Mit ihrer Liebe zu Hasen, Neonfarben und einem Hauch Wahnsinn hinterlässt sie überall ihre ganz eigene Spur.",
    inspiration: "✦ DESIGN INSPIRED BY VALORANT",
    image: "images/Purple Neon Dorakutasan.png",
    thumb: "images/Purple Neon Dora icon.png"
},

{
    name: "Shadow Ghost",
    subtitle: "CALL OF DUTY COLLECTION",
    description: "Shadow Ghost agiert lautlos und präzise. Jeder Einsatz wird sorgfältig geplant und jeder Schritt sitzt perfekt. Ausgerüstet mit modernster taktischer Ausrüstung verschwindet sie ebenso schnell, wie sie auftaucht. Für ihre Gegner bleibt oft nur die Frage, ob sie überhaupt jemals dort gewesen ist.",
    inspiration: "✦ DESIGN INSPIRED BY CALL OF DUTY",
    image: "images/Cod Dorakutasan.png",
    thumb: "images/Cod Dora icon.png"
},

{
    name: "Druella",
    subtitle: "DUNGEONS & DRAGONS COLLECTION",
    description: "Druella basiert auf einem meiner eigenen Dungeons & Dragons Charaktere. Als mächtige Succubus verbindet sie Eleganz mit dunkler Magie und nutzt Charme ebenso geschickt wie ihre übernatürlichen Fähigkeiten. Dieses Design entstand als Hommage an eine meiner Lieblings Bg3 Figuren.",
    inspiration: "✦ DESIGN INSPIRED BY DUNGEONS & DRAGONS",
    image: "images/D&D Dorakutasan.png",
    thumb: "images/D&D Dorakutasan icon.png"
},

{
    name: "Poison Kiss",
    subtitle: "ORIGINAL COLLECTION",
    description: "Poison Kiss liebt alles, was romantisch und verspielt ist. Mit sanften Farben, kleinen Gesten und einer Vorliebe für liebevolle Überraschungen verteilt sie mehr Herzklopfen als jedes Geschenk. Hinter ihrem niedlichen Auftreten verbirgt sich eine charmante Persönlichkeit, die jeden Tag ein kleines bisschen schöner machen möchte.",
    inspiration: "✦ ORIGINAL DESIGN",
    image: "images/Melatonin Dorakutasan.png",
    thumb: "images/Valentine Dora icon.png"
},

{
    name: "Cherry Maid",
    subtitle: "ORIGINAL COLLECTION",
    description: "Cherry Maid verbindet klassischen Maid-Stil mit einer verspielten, niedlichen Ausstrahlung. Zwischen Schleifen, Rüschen und einer Prise Chaos sorgt sie immer für gute Laune und ein herzliches Lächeln. Für sie gehören Höflichkeit, Charme und ein wenig Unsinn einfach zusammen.",
    inspiration: "✦ ORIGINAL DESIGN",
    image: "images/Maid Dorakutasan.png",
    thumb: "images/Maid Dora icon.png"
}

];


/*======================================
ELEMENTE
======================================*/

const artwork = document.getElementById("skinArtwork");
const title = document.getElementById("skinTitle");
const category = document.querySelector(".skin-category");
const description = document.getElementById("skinDescription");

const selector = document.getElementById("skinSelector");

const prev = document.getElementById("prevSkin");
const next = document.getElementById("nextSkin");

let currentSkin = 0;


/*======================================
SKIN LADEN
======================================*/

function loadSkin(index){

    artwork.classList.add("fade");

    setTimeout(() => {

        artwork.src = skins[index].image;

        title.textContent = skins[index].name;
        category.textContent = skins[index].subtitle;
        description.textContent = skins[index].description;

        document.getElementById("skinInspiration").textContent =
            skins[index].inspiration;

        artwork.classList.remove("fade");

    }, 200);

    document.querySelectorAll(".skin-button").forEach((button, i) => {
        button.classList.toggle("active", i === index);
    });

}

/*======================================
BUTTONS ERSTELLEN
======================================*/

skins.forEach((skin, index) => {

    const button = document.createElement("button");

    button.className = "skin-button";

    if (index === 0) {
        button.classList.add("active");
    }

    button.innerHTML = `
        <img src="${skin.thumb}" alt="${skin.name}">
        <span>${skin.name}</span>
    `;

    button.addEventListener("click", () => {

        currentSkin = index;

        loadSkin(currentSkin);

    });

    selector.appendChild(button);

});


/*======================================
PFEILE
======================================*/

next.addEventListener("click",()=>{

    currentSkin++;

    if(currentSkin>=skins.length){

        currentSkin=0;

    }

    loadSkin(currentSkin);

});


prev.addEventListener("click",()=>{

    currentSkin--;

    if(currentSkin<0){

        currentSkin=skins.length-1;

    }

    loadSkin(currentSkin);

});


/*======================================
START
======================================*/

loadSkin(currentSkin);
