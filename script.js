//  Navbar menu
const navbarMenuItems = [
  {
    text: "New Bikes",
    href: "#new-bikes",
    active: false,
    type: "dropdown",
    items: [
      { text: "Honda CD 70", href: "#cd70" },
      { text: "Honda CG 125", href: "#cg125" },
      { text: "Yamaha YBR 125", href: "#ybr125" },
    ],
  },
  {
    text: "Used Bikes",
    href: "#used-bikes",
    active: false,
    type: "dropdown",
    items: [
      { text: "Honda CD 70", href: "#used-cd70" },
      { text: "Suzuki GS 150", href: "#used-gs150" },
    ],
  },
  {
    text: "New Cars",
    href: "#new-cars",
    active: false,
    type: "dropdown",
    items: [
      { text: "Toyota Corolla", href: "#corolla" },
      { text: "Honda Civic", href: "#civic" },
      { text: "Suzuki Alto", href: "#alto" },
    ],
  },
  {
    text: "Used Cars",
    href: "#used-cars",
    active: false,
    type: "dropdown",
    items: [
      { text: "Toyota Corolla", href: "#used-corolla" },
      { text: "Honda City", href: "#used-city" },
    ],
  },
  {
    text: "Videos",
    href: "#videos",
    active: false,
    type: "link",
    icon: "fas fa-video",
  },
  {
    text: "More",
    href: "#more",
    active: false,
    type: "dropdown",
    items: [
      { text: "About Us", href: "#about" },
      { text: "Contact", href: "#contact" },
      { text: "Blog", href: "#blog" },
    ],
  },
];
function renderNavbarMenu() {
  const container = document.getElementById("navbar-menu");
  let html = "";
  navbarMenuItems.forEach((link) => {
    if (link.type === "dropdown") {
      html += `
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fw-medium" 
             href="${link.href}" 
             role="button" 
             data-bs-toggle="dropdown">
            ${link.text}
          </a>
          <ul class="dropdown-menu">
      `;
      link.items.forEach((item) => {
        html += `<li><a class="dropdown-item" href="${item.href}">${item.text}</a></li>`;
      });
      html += `
          </ul>
        </li>
      `;
    } else if (link.type === "link") {
      html += `
        <li class="nav-item">
          <a class="nav-link fw-medium" href="${link.href}">
            ${link.icon ? `<i class="${link.icon}"></i>` : ""} ${link.text}
          </a>
        </li>
      `;
    }
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
  const container = document.getElementById("city-select");
  let html = "";

  cities.forEach((city, index) => {
    html += `<option value="${index === 0 ? "" : city}">${city}</option>`;
  });
  container.innerHTML = html;
}
// Price ranges
const priceRanges = [
  "Price Range",
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
  const container = document.getElementById("price-select");
  let html = "";

  priceRanges.forEach((range, index) => {
    html += `<option value="${index === 0 ? "" : range}">${range}</option>`;
  });

  container.innerHTML = html;
}
//  Vehicles data
const vehiclesData = [
  {
    category: "New Bikes",
    icon: "fa-motorcycle",
    vehicles: [
      {
        name: "Honda CD 70",
        price: 140000,
        year: 2024,
        engine: "70cc",
        location: "Lahore",
        image:
          "https://blog-cdn.el.olx.com.pk/wp-content/uploads/2024/08/09184355/Honda-70-2025-Vs-Honda-70-2024-Model-1-1024x576.jpg",
        status: "NEW",
      },
      {
        name: "Honda CG 125",
        price: 285000,
        year: 2024,
        engine: "125cc",
        location: "Islamabad",
        image:
          "https://cache3.pakwheels.com/system/bike_model_pictures/1379/original/1.jpg?1665656987",
        status: "NEW",
      },
      {
        name: "Yamaha YBR 125",
        price: 315000,
        year: 2024,
        engine: "125cc",
        location: "Peshawar",
        image:
          "https://cache4.pakwheels.com/system/bike_model_pictures/3497/original/2.png?1753961831",
        status: "NEW",
      },
      {
        name: "Suzuki GS 150",
        price: 375000,
        year: 2024,
        engine: "150cc",
        location: "Lahore",
        image: "https://i.ytimg.com/vi/CNq3ncmiSIM/maxresdefault.jpg",
        status: "NEW",
      },
    ],
  },
  {
    category: "Used Bikes",
    icon: "fa-motorcycle",
    vehicles: [
      {
        name: "Honda CD 70",
        price: 95000,
        year: 2021,
        engine: "70cc",
        location: "Karachi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsAgLXRcgzHrEdOERgg2Hs8JC87Ql3iCunQ&s",
        status: "USED",
      },
      {
        name: "Honda CG 125",
        price: 195000,
        year: 2022,
        engine: "125cc",
        location: "Faisalabad",
        image:
          "https://cache1.pakwheels.com/ad_pictures/1292/honda-cg-150-2025-129232695.webp",
        status: "USED",
      },
      {
        name: "Yamaha YBR 125",
        price: 215000,
        year: 2022,
        engine: "125cc",
        location: "Lahore",
        image:
          "https://cache2.pakwheels.com/ad_pictures/1344/tn_yamaha-ybr-125-2017-134472200.webp",
        status: "USED",
      },
      {
        name: "Suzuki GS 150",
        price: 265000,
        year: 2022,
        engine: "150cc",
        location: "Gujranwala",
        image:
          "https://suzukipakistan.com/media/products/Motorcycles/GR150/bikesResize-2.png",
        status: "USED",
      },
    ],
  },
  {
    category: "New Cars",
    icon: "fa-car",
    vehicles: [
      {
        name: "Toyota Corolla GLi",
        price: 5950000,
        year: 2024,
        engine: "1300cc",
        location: "Lahore",
        image:
          "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674",
        status: "NEW",
      },
      {
        name: "Toyota Yaris",
        price: 4899000,
        year: 2024,
        engine: "1300cc",
        location: "Multan",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8KqGLKLtrjOwx0doPh9foHveqi9ho-htBQ&s",
        status: "NEW",
      },
      {
        name: "Honda Civic",
        price: 8699000,
        year: 2024,
        engine: "1500cc",
        location: "Islamabad",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMOYCn40eFFMMIkKsv-EHxptjFaqKbjV0qg&s",
        status: "NEW",
      },
      {
        name: "Suzuki Alto",
        price: 2399000,
        year: 2024,
        engine: "660cc",
        location: "Lahore",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmk0IZMGUQHoOspQsaROBeB-gqZcPeRdcV1Q&s",
        status: "NEW",
      },
    ],
  },
  {
    category: "Used Cars",
    icon: "fa-car",
    vehicles: [
      {
        name: "Toyota Corolla GLi",
        price: 4250000,
        year: 2021,
        engine: "1300cc",
        location: "Karachi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTLoqlM4pnuioXdjSGYFTYL5IQGPZTFcm1A&s",
        status: "USED",
      },
      {
        name: "Toyota Yaris",
        price: 3650000,
        year: 2022,
        engine: "1300cc",
        location: "Faisalabad",
        image:
          "https://cache2.pakwheels.com/ad_pictures/1338/tn_toyota-yaris-gli-cvt-1-3-2025-133803027.webp",
        status: "USED",
      },
      {
        name: "Honda Civic",
        price: 6250000,
        year: 2022,
        engine: "1500cc",
        location: "Lahore",
        image:
          "https://cache3.pakwheels.com/ad_pictures/1331/tn_honda-civic-turbo-1-5-vtec-cvt-2016-133109132.webp",
        status: "USED",
      },
      {
        name: "Suzuki Alto",
        price: 1750000,
        year: 2022,
        engine: "660cc",
        location: "Karachi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_Qovz-wTAVrKWOgOID_Sb8zC8ThASuk-WQ&s",
        status: "USED",
      },
    ],
  },
];
function renderAllVehicles() {
  const container = document.getElementById("vehicles-container");
  let html = "";

  vehiclesData.forEach((section) => {
    html += `
      <div class="mb-5">
        <div class="d-flex align-items-center gap-3 mb-4">
          <i class="fas ${section.icon} fs-1 text-danger"></i>
          <h2 class="fw-bold text-dark mb-0">${section.category}</h2>
        </div>
        <div class="row g-4">
    `;
    section.vehicles.forEach((vehicle) => {
      const badgeClass = vehicle.status === "NEW" ? "bg-success" : "bg-warning";
      html += `
        <div class="col-lg-3 col-md-6">
          <div class="card vehicle-card border-0 shadow-sm h-100">
            <img src="${vehicle.image}" class="card-img-top" alt="${
        vehicle.name
      }">
            <div class="card-body">
              <span class="badge ${badgeClass} mb-2">${vehicle.status}</span>
              <h5 class="card-title fw-semibold">${vehicle.name}</h5>
              <p class="text-danger fs-4 fw-bold mb-2">PKR ${vehicle.price.toLocaleString()}</p>
              <p class="text-muted small mb-0">
                <i class="fas fa-calendar"></i> ${vehicle.year} | 
                <i class="fas fa-cog"></i> ${vehicle.engine} | 
                <i class="fas fa-map-marker-alt"></i> ${vehicle.location}
              </p>
            </div>
          </div>
        </div>
      `;
    });
    html += `
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}
// Footer links
const footerLinks = [
  { text: "About Us", href: "#about" },
  { text: "Contact", href: "#contact" },
  { text: "Privacy Policy", href: "#privacy" },
  { text: "Terms & Conditions", href: "#terms" },
];
function renderFooterLinks() {
  const container = document.getElementById("footer-links");
  let html = "";

  footerLinks.forEach((link) => {
    html += `
      <li class="mb-2">
        <a href="${link.href}" class="text-white-50 text-decoration-none">${link.text}</a>
      </li>
    `;
  });
  container.innerHTML = html;
}
// Social links
const socialLinks = [
  { icon: "fab fa-facebook-f", href: "#" },
  { icon: "fab fa-twitter", href: "#" },
  { icon: "fab fa-instagram", href: "#" },
  { icon: "fab fa-youtube", href: "#" },
  { icon: "fab fa-linkedin-in", href: "#" },
];
function renderSocialLinks() {
  const container = document.getElementById("social-links");
  let html = "";

  socialLinks.forEach((social) => {
    html += `
      <a href="${social.href}" class="text-white text-decoration-none rounded-circle">
        <i class="${social.icon}"></i>
      </a>
    `;
  });
  container.innerHTML = html;
}
// Function call
window.onload = function () {
  renderNavbarMenu();
  renderCities();
  renderPriceRanges();
  renderAllVehicles();
  renderFooterLinks();
  renderSocialLinks();
};
