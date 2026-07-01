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
    inspiration: "✦ INSPIRED BY LEAGUE OF LEGENDS",
    image: "images/Dorakutasan Normal.png",
    thumb: "images/Dorakutasan icon.png"
},

{
    name: "Splash Showdown Dorakutasan",
    subtitle: "LEAGUE COLLECTION",
    description: "Wenn die Sonne am höchsten steht, tauscht Splash Showdown Dorakutasan das Schlachtfeld gegen den Strand. Mit einem kühlen Drink in der Hand genießt sie die Ruhe im Schatten, immer bereit, den perfekten Moment auszukosten. Doch der entspannte Eindruck täuscht, beginnt die Wasserschlacht, stürzt sie sich ohne zu zögern ins Getümmel und sorgt mit ihrer energiegeladenen Art dafür, dass niemand trocken bleibt. Zwischen Gelassenheit und Chaos fühlt sich Splash Showdown Dorakutasan am wohlsten.",
    inspiration: "✦ INSPIRED BY LEAGUE OF LEGENDS",
    image: "images/Pool Party Dorakutasan.png",
    thumb: "images/Pool Party icon.png"
},

{
    name: "Ryū no Mai Dorakutasan",
    subtitle: "LEAGUE COLLECTION",
    description: "Mit der Energie der traditionellen Drachentänze bringt Ryū no Mai Dorakutasan jede Feier zum Leuchten. Wo sie auftaucht, erfüllen Funken, Farben und Feuerwerke den Himmel und sorgen für unvergessliche Momente. Doch zwischen den festlichen Feierlichkeiten genießt sie es ebenso, mit einer Portion Gyoza das Feuerwerk Spektakel zu beobachten und den Abend in aller Ruhe ausklingen zu lassen. Für sie gehören ausgelassene Feste und entspannte Augenblicke untrennbar zusammen.",
    inspiration: "✦ INSPIRED BY LEAGUE OF LEGENDS",
    image: "images/Firecracker Dorakutasan.png",
    thumb: "images/Firecracker Dora icon.png"
},

{
    name: "Soul Fighter Dorakutasan",
    subtitle: "LEAGUE COLLECTION",
    description: "Für Soul Fighter Dorakutasan ist jeder Kampf eine Bühne, auf der Stil genauso wichtig ist wie Stärke. Mit spektakulären Combos, blitzschnellen Reflexen und einem unerschütterlichen Kampfgeist stellt sie sich jedem Gegner entgegen und beweist, dass wahre Meisterschaft mehr als bloße Kraft erfordert. Doch endet das Turnier, zieht es sie direkt vor die Konsole, wo sie ihre Fähigkeiten in Fighting Games weiter perfektioniert. Ob in der Arena oder vor dem Bildschirm. Aufgeben kommt für sie niemals infrage.",
    image: "images/Soul Fighter Dorakutasan.png",
    thumb: "images/Soul Figther Dora.png"
},

{
    title: "Sakura Spirit Dorakutasan",
    category: "LEAGUE COLLECTION",
    description: "Wenn während des Sakura Spirits Festivals die Grenze zwischen der Welt der Lebenden und dem Geisterreich schwindet, erscheint Sakura Spirit Dorakutasan als stille Begleiterin zwischen beiden Welten. Sie führt rastlose Seelen durch Erinnerungen, Abschiede und Neuanfänge. Zwischen den leuchtenden Sakura Spirit und uralten Schreinen erinnert sie daran, dass selbst nach Verlust Hoffnung und Versöhnung ihren Platz finden können. Ihr Weg ist nicht der des Kampfes, sondern der des Gleichgewichts zwischen Vergangenheit und Zukunft."
    inspiration: "✦ INSPIRED BY LEAGUE OF LEGENDS",
    image: "images/Spirit Blossom Dorakutasan.png",
    thumb: "images/Spirit Blossom Dorakutasan.png"
},

{
    title: "Killjoy Dorakutasan",
    category: "VALORANT COLLECTION",
    description: "Als brillante Erfinderin löst Killjoy Dorakutasan jedes Problem mit Köpfchen statt roher Gewalt. Mit ihren selbst entwickelten Gadgets kontrolliert sie das Schlachtfeld und sorgt dafür, dass ihre Gegner niemals wissen, was sie als Nächstes erwartet. Doch sobald die Technik ausgeschaltet ist, kommt ihre zweite Leidenschaft zum Vorschein: Als bekennender Nerd verbringt sie ihre Freizeit mit Videospielen, neuen Technologien und allem, was ihren Erfindergeist weiter antreibt. Für sie ist jede Herausforderung ein Rätsel, das nur darauf wartet, gelöst zu werden."
    image: "images/Killjoy Dorakutasan.png",
    thumb: "images/Killjoy Dorakutasan.png"
},

{
    title: "Junkrat Dorakutasan",
    category: "OVERWATCH COLLECTION",
    description: "Junkrat Dorakutasan besitzt einen unstillbaren Drang nach Explosionen, Chaos und allem, was möglichst spektakulär in die Luft fliegt. Mit ihren verrückten Ideen und einem Talent dafür, aus scheinbar wertlosem Schrott die ungewöhnlichsten Konstruktionen zu bauen, überrascht sie Freunde und Gegner gleichermaßen. Vorausschauendes Denken gehört zwar nicht zu ihren größten Stärken, doch genau ihre unberechenbare Art macht sie so gefährlich. Für sie ist jedes Missgeschick nur ein weiterer Schritt auf dem Weg zur nächsten großen Explosion."
    image: "images/Junkrat Dorakutasan.png",
    thumb: "images/Junkrat Dorakutasan.png"
},

{
    title: "COD",
    category: "CALL OF DUTY COLLECTION",
    description: "Militärischer Look mit taktischer Ausrüstung.",
    image: "images/Cod Dorakutasan.png",
    thumb: "images/Cod Dorakutasan.png"
},

{
    title: "D&D Succubus",
    category: "DUNGEONS & DRAGONS",
    description: "Fantasy-Skin als Succubus interpretiert.",
    image: "images/D&D Dorakutasan.png",
    thumb: "images/D&D Dorakutasan.png"
},

{
    title: "Purple",
    category: "ORIGINAL",
    description: "Neon-Lila Variante meines Charakters.",
    image: "images/Purple Neon Dorakutasan.png",
    thumb: "images/Purple Neon Dorakutasan.png"
},

{
    title: "Melatonin",
    category: "ORIGINAL",
    description: "Traumhafte Version mit sanften Farben.",
    image: "images/Melatonin Dorakutasan.png",
    thumb: "images/Melatonin Dorakutasan.png"
},

{
    title: "Maid",
    category: "ORIGINAL",
    description: "Klassisches Maid Outfit.",
    image: "images/Maid Dorakutasan.png",
    thumb: "images/Maid Dorakutasan.png"
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

        title.textContent = skins[index].title;

        category.textContent = skins[index].category;

        description.textContent = skins[index].description;

        document.getElementById("skinInspiration").textContent = skins[index].inspiration;

        artwork.classList.remove("fade");

    }, 200);

    document.querySelectorAll(".skin-button").forEach((button, i) => {

        button.classList.toggle("active", i === index);

    });

}

/*======================================
BUTTONS ERSTELLEN
======================================*/

skins.forEach((skin,index)=>{

    const button = document.createElement("button");

    button.className = "skin-button";

    if(index===0){

        button.classList.add("active");

    }

    button.innerHTML=`

        <img src="${skin.thumb}" alt="${skin.title}">

        <span>${skin.title}</span>

    `;

    button.addEventListener("click",()=>{

        currentSkin=index;

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
