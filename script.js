// Render all vehicles on main page
function renderAllVehicles() {
  const container = document.getElementById("vehicles-container");
  if (!container) return;
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
    html += `
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}
// Hero search 
function setupHeroSearch() {
  const searchBtn = document.querySelector('.search-btn');
  const keywordInput = document.querySelector('#hero-keyword');
  const citySelect = document.getElementById('city-select');
  const priceSelect = document.getElementById('price-select');
if (!searchBtn || !keywordInput) return;
function performSearch() {
    const keyword = keywordInput.value.trim();
    const city = citySelect.value;
    const price = priceSelect.value;
//with parameters
    let url = 'search.html?';
    const params = [];
    if (keyword) params.push(`keyword=${encodeURIComponent(keyword)}`);
    if (city) params.push(`city=${encodeURIComponent(city)}`);
    if (price) params.push(`price=${encodeURIComponent(price)}`);
     url += params.join('&');
    window.location.href = url;
  }
// Search button 
  searchBtn.addEventListener('click', performSearch);
  keywordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}
// Initialize main page
window.onload = function () {
  renderNavbar();
  renderFooter();
  renderFloatingWhatsApp();
  renderCities('city-select');
  renderPriceRanges('price-select');
  renderAllVehicles();
  setupHeroSearch();
};
