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
    title: "Standard",
    category: "DORAKUTASAN",
    description: "Die Hauptversion meines VTuber-Charakters.",
    image: "images/Dorakutasan Normal.png",
    thumb: "images/Dorakutasan Normal.png"
},

{
    title: "Pool Party",
    category: "LEAGUE COLLECTION",
    description: "Sommerlicher Skin mit Strand-Feeling.",
    image: "images/Pool Party Doralutasan.png",
    thumb: "images/Pool Party Doralutasan.png"
},

{
    title: "Firecracker",
    category: "LEAGUE COLLECTION",
    description: "Inspiriert vom chinesischen Feuerwerksfest.",
    image: "images/Firecracker Dorakutasan.png",
    thumb: "images/Firecracker Dorakutasan.png"
},

{
    title: "Soul Fighter",
    category: "LEAGUE COLLECTION",
    description: "Kampforientierte Variante mit blau-goldenem Stil.",
    image: "images/Soul Figther Dorakutasan.png",
    thumb: "images/Soul Figther Dorakutasan.png"
},

{
    title: "Spirit Blossom",
    category: "LEAGUE COLLECTION",
    description: "Eleganter Fantasy-Skin mit Spirit Blossom Design.",
    image: "images/Spirit Blossom Dorakutasan.png",
    thumb: "images/Spirit Blossom Dorakutasan.png"
},

{
    title: "Killjoy",
    category: "VALORANT",
    description: "Inspirierte Version des Valorant Agents Killjoy.",
    image: "images/Killjoy Dorakutasan.png",
    thumb: "images/Killjoy Dorakutasan.png"
},

{
    title: "Junkrat",
    category: "OVERWATCH",
    description: "Chaotischer Look inspiriert von Junkrat.",
    image: "images/Junkrat Dorakutasan.png",
    thumb: "images/Junkrat Dorakutasan.png"
},

{
    title: "COD",
    category: "CALL OF DUTY",
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

    setTimeout(()=>{

        artwork.src = skins[index].image;

        title.textContent = skins[index].title;

        category.textContent = skins[index].category;

        description.textContent = skins[index].description;

        artwork.classList.remove("fade");

    },200);

    document.querySelectorAll(".skin-button").forEach((button,i)=>{

        button.classList.toggle("active",i===index);

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
