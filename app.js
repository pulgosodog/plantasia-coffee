function plantsConstructor(image, name, growing, description) {
    this.image = image;
    this.name = name;
    this.growing = growing;
    this.description = description;
}

var aloe = new plantsConstructor(
    "images/aloe.jfif",
    "Aloe",
    "Bright light; 65 - 75°F; moderately dry soil",
    "Aloe (Aloe spp.)\, an easy-care succulent\, has distinctive elongated leaves that fan out in a vase shape from a central base. Try smaller varieties such as Aloe vera on a sunny kitchen window. Aloes work nicely in dish gardens and in rooms with Southwestern decor. Keep the spiky leaves away from high-traffic areas."
);

var asparagusFern = new plantsConstructor(
    "images/Asparagus-Fern.jfif",
    "Asparagus Fern",
    "Medium to bright light; 60 - 75°F; evenly moist soil",
    "Delicate needlelike foliage drapes from this subtropical relative of asparagus, which is not a true fern. Stems of asparagus fern (Asparagus densiflorus) shoot upward and outward, making it a good hanging basket plant. Small white flowers hidden among needles turn into bright red berries. Keep the poisonous berries away from children and pets."
);

var peaceLily = new plantsConstructor(
    "images/Peace-lily.jfif",
    "Peace lily",
    "Low to bright light; 60 - 85°F; evenly moist soil",
    "The easy-care peace lily (Spathiphyllum wallisii) tolerates low humidity and low light. Its glossy\, lance-shape leaves tip arching stems that surround the central flower spikes. The spoon-shape flowers normally appear in summer\, but many cultivars bloom intermittently throughout the year. The dark leaves look attractive in a plain pot with a glossy finish."
);

var peperomia = new plantsConstructor(
    "images/Peperomia.jfif",
    "Peperomia",
    "Low to medium light; 60 - 75°F; moderately dry soil",
    "Peperomia's most interesting feature is its leaves\, which vary in shape (heart shape to narrow)\, texture (waxy to wafflelike) and color (green, reddish or silvery gray). Plants occasionally produce slender flowery spikes that resemble rat's tails. Use on tabletops and as a companion in dish gardens and mixed baskets. The plant tolerates the low light of a north windowsill and stays small enough to fit on a desk or to be used in a terrarium."
)

var dieffenbachia = new plantsConstructor(
    "images/Dieffenbachia.jfif",
    "Dieffenbachia",
    "Low to medium light; 65 - 80°F; evenly moist soil",
    "Arching pointed leaves up to 12 inches long\, usually marbled with white or cream\, grow out of a canelike stem. The large leaves of dieffenbachia (Dieffenbachia spp.) provide a tropical architectural accent; the plant also blends well into a mixed grouping of foliage. One of dieffenbachia's common names\, dumb cane\, comes from the toxic sap in the leaves and stems that causes tongue numbness and swelling when chewed by humans or pets."
)
var anthurium = new plantsConstructor(
    "images/Anthurium.jfif",
    "Anthurium",
    "Medium to bright light with no direct sun; 65 - 80°F; evenly moist soil (barely moist in fall and winter)",
    "Showy flowers give bright color for eight weeks or more each year to anthurium (Anthurium andraeanum\, also known as flamingo flower). Flowers typically are red\, but you can find hybrids in shades of pink\, lavender\, white and even green. Anthurium flower blossoms make superb cut flowers because they last a long time. Note that the pretty\, heart-shape leaves contain toxic sap\, so make sure pets and children do not ingest them."
)

var plants = [aloe, asparagusFern, peaceLily, peperomia, dieffenbachia, anthurium]

function plantCardMaker(plant) {

    let htmlTemplate = `
          <div class="plant-card">
          <div class="image-corner"><img src="${plant.image}" alt="${plant.name} image"></div>
          <div class="plant-card-text">
              <h4>${plant.name}</h4>
              <p class="growing"><span>Growing conditions:</span> ${plant.growing}</p>
              <hr>
              <p class="description"> ${plant.description}</p>
          </div>
      </div>
          `;

    return htmlTemplate;
}

var plantGrid = document.getElementById("plant-grid");

document.addEventListener('DOMContentLoaded', () => {
    plants.forEach((n) => {
        plantGrid.innerHTML += plantCardMaker(n);
    });

});

// POP UP MOBILE MENU
var menuBackground = document.querySelector("#menu-background");
var hamburguerButton = document.querySelector("#hamburguer-button");
var quitButton = document.querySelector("#quit");
var menuItems = document.querySelector("#menu-items");
var phoneMenuLinks = document.querySelectorAll("#menu-items li a")
var menuOpen = false;


hamburguerButton.addEventListener("click", () => {
    if (menuOpen === false) {
        menuItems.classList.add('active');
        menuBackground.classList.add('active');
        quitButton.style.position = 'absolute';
        quitButton.style.backgroundSize = 'cover';
        quitButton.style.backgroundPosition = 'center';
        quitButton.style.top = '16.27vw';
        quitButton.style.right = '9.87vw';
        quitButton.style.height = '3.73vw';
        quitButton.style.width = '4vw';
        quitButton.style.zIndex = '1';
    }

quitButton.addEventListener("click", () => {
        menuItems.classList.remove('active');
        menuBackground.classList.remove('active');

        quitButton.style.backgroundImage = '';
        quitButton.style.position = '';
        quitButton.style.backgroundSize = '';
        quitButton.style.backgroundPosition = '';
        quitButton.style.top = '';
        quitButton.style.right = '';
        quitButton.style.height = '';
        quitButton.style.width = '';
        quitButton.style.zIndex = '';
    });
});



phoneMenuLinks.forEach((u) => {
    u.addEventListener("click", () => {
        menuItems.classList.remove('active');
        menuBackground.classList.remove('active');
        menuOpen = false;
    })
})