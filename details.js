// Vehicle data
const vehiclesData = [
  {
    category: "New Bikes",
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
        description:
          "Brand new Honda CD 70 with fuel efficiency and reliable performance. Perfect for daily commute.",
        mileage: "60-70 km/l",
        transmission: "Manual",
        color: "Red",
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
        description:
          "Powerful 125cc engine with smooth performance and comfortable riding experience.",
        mileage: "45-50 km/l",
        transmission: "Manual",
        color: "Black",
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
        description:
          "Stylish Yamaha YBR 125 with excellent build quality and modern features.",
        mileage: "40-45 km/l",
        transmission: "Manual",
        color: "Blue",
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
        description:
          "High performance Suzuki GS 150 with sporty design and powerful engine.",
        mileage: "35-40 km/l",
        transmission: "Manual",
        color: "Red",
      },
    ],
  },
  {
    category: "Used Bikes",
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
        description:
          "Well maintained Honda CD 70 in excellent condition. Single owner.",
        mileage: "60-70 km/l",
        transmission: "Manual",
        color: "Black",
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
        description:
          "Excellent condition Honda CG 125. Regularly serviced and maintained.",
        mileage: "45-50 km/l",
        transmission: "Manual",
        color: "Red",
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
        description:
          "Yamaha YBR 125 in great condition. Well maintained with complete documents.",
        mileage: "40-45 km/l",
        transmission: "Manual",
        color: "Blue",
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
        description:
          "Suzuki GS 150 in perfect condition. All original parts and documents available.",
        mileage: "35-40 km/l",
        transmission: "Manual",
        color: "Black",
      },
    ],
  },
  {
    category: "New Cars",
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
        description:
          "Brand new Toyota Corolla GLi with automatic transmission and modern features.",
        mileage: "12-14 km/l",
        transmission: "Automatic",
        color: "White",
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
        description:
          "Compact and fuel-efficient Toyota Yaris with modern safety features.",
        mileage: "14-16 km/l",
        transmission: "Automatic",
        color: "Silver",
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
        description:
          "Premium Honda Civic with turbocharged engine and luxury features.",
        mileage: "11-13 km/l",
        transmission: "CVT",
        color: "Black",
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
        description:
          "Affordable and fuel-efficient Suzuki Alto, perfect for city driving.",
        mileage: "18-20 km/l",
        transmission: "Manual",
        color: "White",
      },
    ],
  },
  {
    category: "Used Cars",
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
        description:
          "Well maintained Toyota Corolla GLi. First owner, accident-free.",
        mileage: "12-14 km/l",
        transmission: "Automatic",
        color: "Silver",
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
        description:
          "Toyota Yaris in excellent condition with complete service history.",
        mileage: "14-16 km/l",
        transmission: "Automatic",
        color: "Red",
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
        description:
          "Honda Civic Turbo in pristine condition. All original parts and documents.",
        mileage: "11-13 km/l",
        transmission: "CVT",
        color: "White",
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
        description:
          "Suzuki Alto in good condition. Perfect for daily use with low mileage.",
        mileage: "18-20 km/l",
        transmission: "Manual",
        color: "Blue",
      },
    ],
  },
];

// Function to get URL parameter
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Function to find vehicle by ID
function findVehicleById(id) {
  for (let section of vehiclesData) {
    const vehicle = section.vehicles.find((v) => v.id === id);
    if (vehicle) {
      return vehicle;
    }
  }
  return null;
}

// Function to render vehicle details
function renderVehicleDetails() {
  const vehicleId = getUrlParameter("id");
  const container = document.getElementById("vehicle-details");

  if (!vehicleId) {
    container.innerHTML = `
      <div class="alert alert-warning text-center">
        <h4>No Vehicle Selected</h4>
        <p>Please select a vehicle from the home page.</p>
        <a href="index.html" class="btn btn-danger">Go to Home</a>
      </div>
    `;
    return;
  }

  const vehicle = findVehicleById(vehicleId);

  if (!vehicle) {
    container.innerHTML = `
      <div class="alert alert-danger text-center">
        <h4>Vehicle Not Found</h4>
        <p>The vehicle you're looking for doesn't exist.</p>
        <a href="index.html" class="btn btn-danger">Go to Home</a>
      </div>
    `;
    return;
  }

  const badgeClass = vehicle.status === "NEW" ? "bg-success" : "bg-warning";

  container.innerHTML = `
    <div class="row g-4">
      <!-- Image Section -->
      <div class="col-lg-6">
        <div class="card border-0 shadow">
          <img src="${vehicle.image}" class="card-img-top" alt="${
    vehicle.name
  }" style="height: 400px; object-fit: cover;">
        </div>
      </div>

      <!-- Details Section -->
      <div class="col-lg-6">
        <div class="card border-0 shadow h-100">
          <div class="card-body">
            <span class="badge ${badgeClass} mb-3">${vehicle.status}</span>
            <h1 class="fw-bold mb-3">${vehicle.name}</h1>
            <h2 class="text-danger mb-4">PKR ${vehicle.price.toLocaleString()}</h2>
            
            <p class="text-muted mb-4">${vehicle.description}</p>

            <hr>

            <h5 class="fw-bold mb-3">Specifications</h5>
            <div class="row g-3 mb-4">
              <div class="col-6">
                <div class="d-flex align-items-center gap-2">
                  <i class="fas fa-calendar text-danger"></i>
                  <div>
                    <small class="text-muted d-block">Year</small>
                    <strong>${vehicle.year}</strong>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center gap-2">
                  <i class="fas fa-cog text-danger"></i>
                  <div>
                    <small class="text-muted d-block">Engine</small>
                    <strong>${vehicle.engine}</strong>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center gap-2">
                  <i class="fas fa-gas-pump text-danger"></i>
                  <div>
                    <small class="text-muted d-block">Mileage</small>
                    <strong>${vehicle.mileage}</strong>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center gap-2">
                  <i class="fas fa-sync-alt text-danger"></i>
                  <div>
                    <small class="text-muted d-block">Transmission</small>
                    <strong>${vehicle.transmission}</strong>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center gap-2">
                  <i class="fas fa-palette text-danger"></i>
                  <div>
                    <small class="text-muted d-block">Color</small>
                    <strong>${vehicle.color}</strong>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center gap-2">
                  <i class="fas fa-map-marker-alt text-danger"></i>
                  <div>
                    <small class="text-muted d-block">Location</small>
                    <strong>${vehicle.location}</strong>
                  </div>
                </div>
              </div>
            </div>

            <hr>

            <div class="d-grid gap-2">
              <button class="btn btn-danger btn-lg">
                <i class="fas fa-phone"></i> Contact Seller
              </button>
              <button class="btn btn-outline-danger btn-lg">
                <i class="fas fa-heart"></i> Save Ad
              </button>
              <a href="index.html" class="btn btn-secondary btn-lg">
                <i class="fas fa-arrow-left"></i> Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Load details when page loads
window.onload = renderVehicleDetails;
