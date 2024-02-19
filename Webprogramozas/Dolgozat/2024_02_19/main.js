let cars = [
  {
    "name": "Toyota Corolla",
    "manufacturing_year": 2022,
    "horsepower": 150,
    "fuel_consumption": 5.8
  },
  {
    "name": "Volkswagen Golf",
    "manufacturing_year": 2021,
    "horsepower": 130,
    "fuel_consumption": 6.2
  },
  {
    "name": "Ford Mustang",
    "manufacturing_year": 2023,
    "horsepower": 450,
    "fuel_consumption": 12.5
  },
  {
    "name": "Honda Civic",
    "manufacturing_year": 2020,
    "horsepower": 120,
    "fuel_consumption": 5.5
  },
  {
    "name": "BMW 3 Series",
    "manufacturing_year": 2022,
    "horsepower": 250,
    "fuel_consumption": 7.0
  },
  {
    "name": "Mercedes-Benz C-Class",
    "manufacturing_year": 2021,
    "horsepower": 200,
    "fuel_consumption": 6.8
  },
  {
    "name": "Audi A4",
    "manufacturing_year": 2023,
    "horsepower": 190,
    "fuel_consumption": 7.2
  },
  {
    "name": "Hyundai Elantra",
    "manufacturing_year": 2020,
    "horsepower": 140,
    "fuel_consumption": 6.0
  },
  {
    "name": "Kia Optima",
    "manufacturing_year": 2021,
    "horsepower": 160,
    "fuel_consumption": 6.5
  },
  {
    "name": "Subaru Impreza",
    "manufacturing_year": 2022,
    "horsepower": 170,
    "fuel_consumption": 6.3
  },
  {
    "name": "Mazda3",
    "manufacturing_year": 2023,
    "horsepower": 180,
    "fuel_consumption": 6.7
  },
  {
    "name": "Nissan Altima",
    "manufacturing_year": 2021,
    "horsepower": 150,
    "fuel_consumption": 6.1
  },
  {
    "name": "Chevrolet Malibu",
    "manufacturing_year": 2020,
    "horsepower": 130,
    "fuel_consumption": 6.4
  },
  {
    "name": "Ford Focus",
    "manufacturing_year": 2022,
    "horsepower": 140,
    "fuel_consumption": 5.9
  },
  {
    "name": "Volkswagen Passat",
    "manufacturing_year": 2023,
    "horsepower": 170,
    "fuel_consumption": 6.6
  }
]

//1. feladat
window.addEventListener("DOMContentLoaded", ()=>{
  cars.forEach(car => {
    document.getElementById("tableOutput").innerHTML += `
    <tr id="row${cars.indexOf(car)}">
      <td>${car.name}</td>
      <td>${car.manufacturing_year}</td>
      <td>${car.horsepower}</td>
      <td>${car.fuel_consumption}</td>
    </tr>`
  });
})
//2. feladat
document.getElementById("manufacturingYearRow").addEventListener("click", ()=>{
  /*let rowsList = [0];
  for (let i = 1; i < cars.length; i++){
    if (cars.indexOf(i) > cars.indexOf(i-1)){
      rowsList.unshift(i);
    }
  }*/
}, true)
//3. feladat
window.addEventListener("resize", ()=>{
  document.getElementById("tableOutput").style.display = "none"
  cars.forEach(car => {
    document.getElementById("cardOutput").innerHTML += `
    <div class="col-sm">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${car.name}</h5>
          <ul class="list-group">
            <li class="list-group-item">${car.manufacturing_year}</li>
            <li class="list-group-item">${car.horsepower}</li>
            <li class="list-group-item">${car.fuel_consumption}</li>
          </ul>
        </div>
      </div>
    </div>`
  })
}, true)