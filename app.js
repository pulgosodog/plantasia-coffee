function PlantsConstructor(image, name, growing, description) {
  this.image = image;
  this.name = name;
  this.growing = growing;
  this.description = description;
}

const aloe = new PlantsConstructor(
  'images/aloe.jfif',
  'Aloe',
  'Bright light; 65 - 75°F; moderately dry soil',
  'Aloe (Aloe spp.), an easy-care succulent, has distinctive elongated leaves that fan out in a vase shape from a central base. Try smaller varieties such as Aloe vera on a sunny kitchen window. Aloes work nicely in dish gardens and in rooms with Southwestern decor. Keep the spiky leaves away from high-traffic areas.',
);

const asparagusFern = new PlantsConstructor(
  'images/Asparagus-Fern.jfif',
  'Asparagus Fern',
  'Medium to bright light; 60 - 75°F; evenly moist soil',
  'Delicate needlelike foliage drapes from this subtropical relative of asparagus, which is not a true fern. Stems of asparagus fern (Asparagus densiflorus) shoot upward and outward, making it a good hanging basket plant. Small white flowers hidden among needles turn into bright red berries. Keep the poisonous berries away from children and pets.',
);

const peaceLily = new PlantsConstructor(
  'images/Peace-lily.jfif',
  'Peace lily',
  'Low to bright light; 60 - 85°F; evenly moist soil',
  'The easy-care peace lily (Spathiphyllum wallisii) tolerates low humidity and low light. Its glossy, lance-shape leaves tip arching stems that surround the central flower spikes. The spoon-shape flowers normally appear in summer, but many cultivars bloom intermittently throughout the year. The dark leaves look attractive in a plain pot with a glossy finish.',
);

const peperomia = new PlantsConstructor(
  'images/Peperomia.jfif',
  'Peperomia',
  'Low to medium light; 60 - 75°F; moderately dry soil',
  "Peperomia's most interesting feature is its leaves, which vary in shape (heart shape to narrow), texture (waxy to wafflelike) and color (green, reddish or silvery gray). Plants occasionally produce slender flowery spikes that resemble rat's tails. Use on tabletops and as a companion in dish gardens and mixed baskets. The plant tolerates the low light of a north windowsill and stays small enough to fit on a desk or to be used in a terrarium.",
);

const dieffenbachia = new PlantsConstructor(
  'images/Dieffenbachia.jfif',
  'Dieffenbachia',
  'Low to medium light; 65 - 80°F; evenly moist soil',
  "Arching pointed leaves up to 12 inches long, usually marbled with white or cream, grow out of a canelike stem. The large leaves of dieffenbachia (Dieffenbachia spp.) provide a tropical architectural accent; the plant also blends well into a mixed grouping of foliage. One of dieffenbachia's common names, dumb cane, comes from the toxic sap in the leaves and stems that causes tongue numbness and swelling when chewed by humans or pets.",
);

const anthurium = new PlantsConstructor(
  'images/Anthurium.jfif',
  'Anthurium',
  'Medium to bright light with no direct sun; 65 - 80°F; evenly moist soil (barely moist in fall and winter)',
  'Showy flowers give bright color for eight weeks or more each year to anthurium (Anthurium andraeanum, also known as flamingo flower). Flowers typically are red, but you can find hybrids in shades of pink, lavender, white and even green. Anthurium flower blossoms make superb cut flowers because they last a long time. Note that the pretty, heart-shape leaves contain toxic sap, so make sure pets and children do not ingest them.',
);

const plants = [aloe, asparagusFern, peaceLily, peperomia, dieffenbachia, anthurium];

function plantCardMaker(plant){

  const htmlTemplate = `
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

const plantGrid = document.getElementById('plant-grid');

document.addEventListener('DOMContentLoaded', () => {
  plants.forEach((n) => {
  plantGrid.innerHTML += plantCardMaker(n);
  });
});

// POP UP MOBILE MENU
const menuBackground = document.querySelector('#menu-background');
const hamburguerButton = document.querySelector('#hamburguer-button');
const quitButton = document.querySelector('#quit');
const phoneMenuLinks = document.querySelectorAll('#menu-items li a');

hamburguerButton.addEventListener('click', () => {
  menuBackground.classList.add('active');
});

quitButton.addEventListener('click', () => {
  menuBackground.classList.remove('active');
});

phoneMenuLinks.forEach((u) => {
  u.addEventListener('click', () => {
    menuBackground.classList.remove('active');
  });
});