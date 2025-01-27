import onCreateForm from "./createForm.js";

const form = document.getElementById("createForm");
console.log("got form", form);
form.addEventListener("submit", onCreateForm);

const listingsContainer = document.getElementById("listingContainer");

async function loadListings() {
  try {
    const response = await fetch("./airbnb_sf_listings_500.json");
    const listings = await response.json();

    listings.slice(0, 50).forEach((listing) => {
      const listingCard = createListingCard(listing);
      listingsContainer.appendChild(listingCard);
    });
  } catch (error) {
    console.error("Error loading listings:", error);
  }
}

function createListingCard(listing) {
  const card = document.createElement("div");
  card.setAttribute("class", "listing");
  card.classList.add("col", "mb-4");

  const amenities = JSON.parse(listing.amenities);

  card.innerHTML = `
    <div class="card h-100">
      <img src="${listing.picture_url}" class="card-img-top" alt="${listing.name}">
      <div class="card-body">
        <h5 class="card-title">${listing.name}</h5>
        <p class="card-text">${listing.description}</p>
        <p class="card-text">Amenities: ${amenities.join(", ")}</p>
        <div class="d-flex align-items-center">
          <img src="${listing.host_picture_url}" class="host-avatar rounded-circle" alt="${listing.host_name}">
          <p class="card-text mb-0">Host: ${listing.host_name}</p>
        </div>
        <p class="card-text">Price: $${listing.price} per night</p>
      </div>
       <div class="controls">
              <button onclick="contactHost(${listing.id})">Message Host</button>
              <button onclick="bookListing(${listing.id})">Book Now</button>
          </div>
    </div>
  `;

  return card;
}

loadListings();
