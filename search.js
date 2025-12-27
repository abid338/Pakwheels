// Navbar menu
const navbarMenuItems = [
  {
    text: "New Bikes",
    href: "search.html?category=New Bikes",
    active: false,
    type: "link",
  },
  {
    text: "Used Bikes",
    href: "search.html?category=Used Bikes",
    active: false,
    type: "link",
  },
  {
    text: "New Cars",
    href: "search.html?category=New Cars",
    active: false,
    type: "link",
  },
  {
    text: "Used Cars",
    href: "search.html?category=Used Cars",
    active: false,
    type: "link",
  },
  {
    text: "Videos",
    href: "#videos",
    active: false,
    type: "link",
    icon: "fas fa-video",
  },
];

function renderNavbarMenu() {
  const container = document.getElementById("navbar-menu");
  let html = "";
  navbarMenuItems.forEach((link) => {
    html += `
      <li class="nav-item">
        <a class="nav-link fw-medium" href="${link.href}">
          ${link.icon ? `<i class="${link.icon}"></i>` : ""} ${link.text}
        </a>
      </li>
    `;
  });
  container.innerHTML = html;
}

// Cities
const cities = [
  "All Cities",
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Sialkot",
  "Gujranwala",
];

function renderCities() {
  const container = document.getElementById("city-filter");
  let html = "";
  cities.forEach((city, index) => {
    html += `<option value="${index === 0 ? "" : city}">${city}</option>`;
  });
  container.innerHTML = html;
}

// Price ranges
const priceRanges = [
  "All Prices",
  "Under 5 Lacs",
  "5 - 10 Lacs",
  "10 - 15 Lacs",
  "15 - 20 Lacs",
  "20 - 30 Lacs",
  "30 - 50 Lacs",
  "50 Lacs - 1 Crore",
  "Above 1 Crore",
];

function renderPriceRanges() {
  const container = document.getElementById("price-filter");
  let html = "";
  priceRanges.forEach((range, index) => {
    html += `<option value="${index === 0 ? "" : range}">${range}</option>`;
  });
  container.innerHTML = html;
}

// Vehicles data
const vehiclesData = [
  {
    category: "New Bikes",
    icon: "fa-motorcycle",
    vehicles: [
      {
        id: "new-bike-1",
        name: "Honda CD 70",
        price: 140000,
        year: 2024,
        engine: "70cc",
        location: "Lahore",
        image:
          "https://blog-cdn.el.olx.com.pk/wp-content/uploads/2024/08/09184355/Honda-70-2025-Vs-Honda-70-2024-Model-1-1024x576.jpg",
        status: "NEW",
        description: "Brand new Honda CD 70 with fuel efficiency and reliable performance.",
        mileage: "60-70 km/l",
        transmission: "Manual",
        color: "Red"
      },
      {
        id: "new-bike-2",
        name: "Honda CG 125",
        price: 285000,
        year: 2024,
        engine: "125cc",
        location: "Islamabad",
        image:
          "https://cache3.pakwheels.com/system/bike_model_pictures/1379/original/1.jpg?1665656987",
        status: "NEW",
        description: "Powerful 125cc engine with smooth performance.",
        mileage: "45-50 km/l",
        transmission: "Manual",
        color: "Black"
      },
      {
        id: "new-bike-3",
        name: "Yamaha YBR 125",
        price: 315000,
        year: 2024,
        engine: "125cc",
        location: "Peshawar",
        image:
          "https://cache4.pakwheels.com/system/bike_model_pictures/3497/original/2.png?1753961831",
        status: "NEW",
        description: "Stylish Yamaha YBR 125 with excellent build quality.",
        mileage: "40-45 km/l",
        transmission: "Manual",
        color: "Blue"
      },
      {
        id: "new-bike-4",
        name: "Suzuki GS 150",
        price: 375000,
        year: 2024,
        engine: "150cc",
        location: "Lahore",
        image: "https://i.ytimg.com/vi/CNq3ncmiSIM/maxresdefault.jpg",
        status: "NEW",
        description: "High performance Suzuki GS 150 with sporty design.",
        mileage: "35-40 km/l",
        transmission: "Manual",
        color: "Red"
      },
    ],
  },
  {
    category: "Used Bikes",
    icon: "fa-motorcycle",
    vehicles: [
      {
        id: "used-bike-1",
        name: "Honda CD 70",
        price: 95000,
        year: 2021,
        engine: "70cc",
        location: "Karachi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsAgLXRcgzHrEdOERgg2Hs8JC87Ql3iCunQ&s",
        status: "USED",
        description: "Well maintained Honda CD 70 in excellent condition.",
        mileage: "60-70 km/l",
        transmission: "Manual",
        color: "Black"
      },
      {
        id: "used-bike-2",
        name: "Honda CG 125",
        price: 195000,
        year: 2022,
        engine: "125cc",
        location: "Faisalabad",
        image:
          "https://cache1.pakwheels.com/ad_pictures/1292/honda-cg-150-2025-129232695.webp",
        status: "USED",
        description: "Excellent condition Honda CG 125.",
        mileage: "45-50 km/l",
        transmission: "Manual",
        color: "Red"
      },
      {
        id: "used-bike-3",
        name: "Yamaha YBR 125",
        price: 215000,
        year: 2022,
        engine: "125cc",
        location: "Lahore",
        image:
          "https://cache2.pakwheels.com/ad_pictures/1344/tn_yamaha-ybr-125-2017-134472200.webp",
        status: "USED",
        description: "Yamaha YBR 125 in great condition.",
        mileage: "40-45 km/l",
        transmission: "Manual",
        color: "Blue"
      },
      {
        id: "used-bike-4",
        name: "Suzuki GS 150",
        price: 265000,
        year: 2022,
        engine: "150cc",
        location: "Gujranwala",
        image:
          "https://suzukipakistan.com/media/products/Motorcycles/GR150/bikesResize-2.png",
        status: "USED",
        description: "Suzuki GS 150 in perfect condition.",
        mileage: "35-40 km/l",
        transmission: "Manual",
        color: "Black"
      },
    ],
  },
  {
    category: "New Cars",
    icon: "fa-car",
    vehicles: [
      {
        id: "new-car-1",
        name: "Toyota Corolla GLi",
        price: 5950000,
        year: 2024,
        engine: "1300cc",
        location: "Lahore",
        image:
          "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674",
        status: "NEW",
        description: "Brand new Toyota Corolla GLi with automatic transmission.",
        mileage: "12-14 km/l",
        transmission: "Automatic",
        color: "White"
      },
      {
        id: "new-car-2",
        name: "Toyota Yaris",
        price: 4899000,
        year: 2024,
        engine: "1300cc",
        location: "Multan",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8KqGLKLtrjOwx0doPh9foHveqi9ho-htBQ&s",
        status: "NEW",
        description: "Compact and fuel-efficient Toyota Yaris.",
        mileage: "14-16 km/l",
        transmission: "Automatic",
        color: "Silver"
      },
      {
        id: "new-car-3",
        name: "Honda Civic",
        price: 8699000,
        year: 2024,
        engine: "1500cc",
        location: "Islamabad",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMOYCn40eFFMMIkKsv-EHxptjFaqKbjV0qg&s",
        status: "NEW",
        description: "Premium Honda Civic with turbocharged engine.",
        mileage: "11-13 km/l",
        transmission: "CVT",
        color: "Black"
      },
      {
        id: "new-car-4",
        name: "Suzuki Alto",
        price: 2399000,
        year: 2024,
        engine: "660cc",
        location: "Lahore",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmk0IZMGUQHoOspQsaROBeB-gqZcPeRdcV1Q&s",
        status: "NEW",
        description: "Affordable and fuel-efficient Suzuki Alto.",
        mileage: "18-20 km/l",
        transmission: "Manual",
        color: "White"
      },
    ],
  },
  {
    category: "Used Cars",
    icon: "fa-car",
    vehicles: [
      {
        id: "used-car-1",
        name: "Toyota Corolla GLi",
        price: 4250000,
        year: 2021,
        engine: "1300cc",
        location: "Karachi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTLoqlM4pnuioXdjSGYFTYL5IQGPZTFcm1A&s",
        status: "USED",
        description: "Well maintained Toyota Corolla GLi.",
        mileage: "12-14 km/l",
        transmission: "Automatic",
        color: "Silver"
      },
      {
        id: "used-car-2",
        name: "Toyota Yaris",
        price: 3650000,
        year: 2022,
        engine: "1300cc",
        location: "Faisalabad",
        image:
          "https://cache2.pakwheels.com/ad_pictures/1338/tn_toyota-yaris-gli-cvt-1-3-2025-133803027.webp",
        status: "USED",
        description: "Toyota Yaris in excellent condition.",
        mileage: "14-16 km/l",
        transmission: "Automatic",
        color: "Red"
      },
      {
        id: "used-car-3",
        name: "Honda Civic",
        price: 6250000,
        year: 2022,
        engine: "1500cc",
        location: "Lahore",
        image:
          "https://cache3.pakwheels.com/ad_pictures/1331/tn_honda-civic-turbo-1-5-vtec-cvt-2016-133109132.webp",
        status: "USED",
        description: "Honda Civic Turbo in pristine condition.",
        mileage: "11-13 km/l",
        transmission: "CVT",
        color: "White"
      },
      {
        id: "used-car-4",
        name: "Suzuki Alto",
        price: 1750000,
        year: 2022,
        engine: "660cc",
        location: "Karachi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_Qovz-wTAVrKWOgOID_Sb8zC8ThASuk-WQ&s",
        status: "USED",
        description: "Suzuki Alto in good condition.",
        mileage: "18-20 km/l",
        transmission: "Manual",
        color: "Blue"
      },
    ],
  },
];

// Get URL parameters
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Filter vehicles based on criteria
function filterVehicles(keyword, category, city, priceRange) {
  let results = [];
  
  // Collect all vehicles
  vehiclesData.forEach((section) => {
    section.vehicles.forEach((vehicle) => {
      results.push({ ...vehicle, category: section.category });
    });
  });

  // Filter by category (from navbar or URL)
  if (category) {
    results = results.filter(v => v.category === category);
  }

  // Filter by keyword (search in name)
  if (keyword) {
    const searchTerm = keyword.toLowerCase();
    results = results.filter(v => 
      v.name.toLowerCase().includes(searchTerm)
    );
  }

  // Filter by city
  if (city) {
    results = results.filter(v => v.location === city);
  }

  // Filter by price range
  if (priceRange && priceRange !== "All Prices") {
    results = results.filter(v => {
      const price = v.price;
      
      if (priceRange === "Under 5 Lacs") return price < 500000;
      if (priceRange === "5 - 10 Lacs") return price >= 500000 && price < 1000000;
      if (priceRange === "10 - 15 Lacs") return price >= 1000000 && price < 1500000;
      if (priceRange === "15 - 20 Lacs") return price >= 1500000 && price < 2000000;
      if (priceRange === "20 - 30 Lacs") return price >= 2000000 && price < 3000000;
      if (priceRange === "30 - 50 Lacs") return price >= 3000000 && price < 5000000;
      if (priceRange === "50 Lacs - 1 Crore") return price >= 5000000 && price < 10000000;
      if (priceRange === "Above 1 Crore") return price >= 10000000;
      
      return true;
    });
  }

  return results;
}

// Render search results
function renderSearchResults(vehicles) {
  const container = document.getElementById("search-results");
  const infoContainer = document.getElementById("results-info");
  
  if (vehicles.length === 0) {
    infoContainer.innerHTML = `
      <div class="alert alert-warning">
        <i class="fas fa-exclamation-triangle"></i> 
        No vehicles found matching your criteria. Try adjusting your filters.
      </div>
    `;
    container.innerHTML = "";
    return;
  }

  infoContainer.innerHTML = `
    <div class="d-flex align-items-center gap-2">
      <i class="fas fa-check-circle text-success"></i>
      <span class="text-muted">Found <strong>${vehicles.length}</strong> vehicle(s)</span>
    </div>
  `;

  let html = "";
  vehicles.forEach((vehicle) => {
    const badgeClass = vehicle.status === "NEW" ? "bg-success" : "bg-warning";
    html += `
      <div class="col-lg-3 col-md-6">
        <div class="card vehicle-card border-0 shadow-sm h-100">
          <img src="${vehicle.image}" class="card-img-top" alt="${vehicle.name}">
          <div class="card-body">
            <span class="badge ${badgeClass} mb-2">${vehicle.status}</span>
            <h5 class="card-title fw-semibold">${vehicle.name}</h5>
            <p class="text-danger fs-4 fw-bold mb-2">PKR ${vehicle.price.toLocaleString()}</p>
            <p class="text-muted small mb-3">
              <i class="fas fa-calendar"></i> ${vehicle.year} | 
              <i class="fas fa-cog"></i> ${vehicle.engine} | 
              <i class="fas fa-map-marker-alt"></i> ${vehicle.location}
            </p>
            <a href="details.html?id=${vehicle.id}" class="btn btn-danger w-100">View Details</a>
          </div>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// Perform search
function performSearch() {
  const keyword = document.getElementById("keyword-input").value;
  const city = document.getElementById("city-filter").value;
  const priceRange = document.getElementById("price-filter").value;
  const category = getUrlParameter("category");

  const results = filterVehicles(keyword, category, city, priceRange);
  renderSearchResults(results);

  // Update heading
  const heading = document.getElementById("search-heading");
  if (category) {
    heading.textContent = `Search Results - ${category}`;
  } else if (keyword) {
    heading.textContent = `Search Results for "${keyword}"`;
  } else {
    heading.textContent = "All Vehicles";
  }
}

// Initialize page
window.onload = function() {
  renderNavbarMenu();
  renderCities();
  renderPriceRanges();
  
  // Get URL parameters and set filters
  const urlCategory = getUrlParameter("category");
  const urlKeyword = getUrlParameter("keyword");
  const urlCity = getUrlParameter("city");
  const urlPrice = getUrlParameter("price");

  if (urlKeyword) document.getElementById("keyword-input").value = urlKeyword;
  if (urlCity) document.getElementById("city-filter").value = urlCity;
  if (urlPrice) document.getElementById("price-filter").value = urlPrice;

  // Perform initial search
  performSearch();

  // Add event listener to search button
  document.getElementById("search-btn").addEventListener("click", performSearch);
  
  // Search on Enter key in keyword input
  document.getElementById("keyword-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });
};