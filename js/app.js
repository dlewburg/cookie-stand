'use strict';

let hrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(name, minCustomer, maxCustomer, avgCookiePurchased){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiePurchased = avgCookiePurchased;
  this.cookiesPurchased = [];
  this.totalCookies = 0;
}

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store ('Tokyo', 3, 24, 1.2);
let dubai = new Store ('Dubai', 11, 38, 3.7);
let paris = new Store ('Paris', 20, 38, 2.3);
let lima = new Store ('Lima', 2, 16, 4.6);


Store.prototype.customersPerHr = function(){
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
};


Store.prototype.generateCookies = function(){
  for (let i = 0; i < hrs.length; i++){
    let cookieAmt = Math.floor(this.customersPerHr()*this.avgCookiePurchased);
    this.cookiesPurchased.push (cookieAmt);
    this.totalCookies += cookieAmt;
  }
};

let cookieStore = [];
cookieStore.push(seattle, tokyo, dubai, paris, lima);
console.log(cookieStore);

let myList= document.getElementById('store-Sales');

Store.prototype.render = function(){
  let tableBody = document.createElement('tbody');
  myList.appendChild(tableBody);

  let tableRow = document.createElement('tr');
  tableBody.appendChild(tableRow);

  let locationName = document.createElement ('td');
  locationName.textContent=this.name;
  tableRow.appendChild(locationName);
  for (let i = 0; i < hrs.length; i++){
    let tdElement = document.createElement('td');
    tdElement.textContent=this.cookiesPurchased[i];
    tableRow.appendChild(tdElement);
  }
  let tdTotalElement = document.createElement('td');
  tdTotalElement.textContent=this.totalCookies;
  tableRow.appendChild(tdTotalElement);
};

function tableHeader(){
  let blankSpace = document.createElement('td');
  blankSpace.textContent='';
  myList.appendChild(blankSpace);
  for (let i = 0; i < hrs.length; i++){
    let tHeader = document.createElement('th');
    tHeader.textContent=hrs[i];
    myList.appendChild(tHeader);
  }
  let blankTotalSpace = document.createElement('td');
  blankTotalSpace.textContent='Daily Location Total';
  myList.appendChild(blankTotalSpace);

}


tableHeader();
function renderAll(){
  for (let i = 0; i < cookieStore.length; i++){
    cookieStore[i].generateCookies();
    cookieStore[i].render();
  }
}
renderAll();

// seattle.generateCookies();
// seattle.render();


// tokyo.generateCookies();
// tokyo.render();


// dubai.generateCookies();
// dubai.render();


// paris.generateCookies();
// paris.render();

// lima.generateCookies();
// lima.render();


// Store.prototype.generateCookies = function(){
//   this.generateCookies =
// }

// Store.prototype.customersPerHr = function (){
//   this.customersPerHr = return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
// }


// let seattle = {
//   name: 'Seattle',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookiePurchased: 6.3,
//   cookiesPurchased: [],
//   totalCookies: 0,
//   generateCookies: function(){
//     for (let i = 0; i < hrs.length; i++){
//       let cookieAmt = Math.floor(this.customersPerHr()*this.avgCookiePurchased);
//       this.cookiesPurchased.push (cookieAmt);
//       this.totalCookies += cookieAmt;
//     }
//   },
//   customersPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },
// render: function(){
//   let myList= document.getElementById('seattleSales');
//   let heading=document.getElementById('seattle');
//   heading.textContent=this.name;
//   for (let i = 0; i < hrs.length; i++){
//     let liElement = document.createElement('li');
//     liElement.textContent= `${hrs[i]}: ${this.cookiesPurchased[i]} cookies`;
//     myList.appendChild(liElement);
//   }
//   let liElement = document.createElement('li');
//   liElement.textContent= `Total: ${this.totalCookies} cookies`;
//   myList.appendChild(liElement);
// }
// };

// seattle.generateCookies();
// seattle.render();

// let tokyo = {
//   name: 'Tokyo',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookiePurchased: 1.2,
//   cookiesPurchased: [],
//   totalCookies: 0,
//   generateCookies: function(){
//     for (let i = 0; i < hrs.length; i++){
//       let cookieAmt = Math.floor(this.customersPerHr()*this.avgCookiePurchased);
//       this.cookiesPurchased.push (cookieAmt);
//       this.totalCookies += cookieAmt;
//     }
//   },
//   customersPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },
//   render: function(){
//     let myList= document.getElementById('tokyoSales');
//     let heading=document.getElementById('tokyo');
//     heading.textContent=this.name;
//     for (let i = 0; i < hrs.length; i++){
//       let liElement = document.createElement('li');
//       liElement.textContent= `${hrs[i]}: ${this.cookiesPurchased[i]} cookies`;
//       myList.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
//     liElement.textContent= `Total: ${this.totalCookies} cookies`;
//     myList.appendChild(liElement);
//   }
// };

// tokyo.generateCookies();
// tokyo.render();

// let dubai = {
//   name: 'Dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookiePurchased: 3.7,
//   cookiesPurchased: [],
//   totalCookies: 0,
//   generateCookies: function(){
//     for (let i = 0; i < hrs.length; i++){
//       let cookieAmt = Math.floor(this.customersPerHr()*this.avgCookiePurchased);
//       this.cookiesPurchased.push (cookieAmt);
//       this.totalCookies += cookieAmt;
//     }
//   },
//   customersPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },
//   render: function(){
//     let myList= document.getElementById('dubaiSales');
//     let heading=document.getElementById('dubai');
//     heading.textContent=this.name;
//     for (let i = 0; i < hrs.length; i++){
//       let liElement = document.createElement('li');
//       liElement.textContent= `${hrs[i]}: ${this.cookiesPurchased[i]} cookies`;
//       myList.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
//     liElement.textContent= `Total: ${this.totalCookies} cookies`;
//     myList.appendChild(liElement);
//   }
// };

// dubai.generateCookies();
// dubai.render();

// let paris = {
//   name: 'Paris',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookiePurchased: 2.3,
//   cookiesPurchased: [],
//   totalCookies: 0,
//   generateCookies: function(){
//     for (let i = 0; i < hrs.length; i++){
//       let cookieAmt = Math.floor(this.customersPerHr()*this.avgCookiePurchased);
//       this.cookiesPurchased.push (cookieAmt);
//       this.totalCookies += cookieAmt;
//     }
//   },
//   customersPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },
//   render: function(){
//     let myList= document.getElementById('parisSales');
//     let heading=document.getElementById('paris');
//     heading.textContent=this.name;
//     for (let i = 0; i < hrs.length; i++){
//       let liElement = document.createElement('li');
//       liElement.textContent= `${hrs[i]}: ${this.cookiesPurchased[i]} cookies`;
//       myList.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
//     liElement.textContent= `Total: ${this.totalCookies} cookies`;
//     myList.appendChild(liElement);
//   }
// };

// paris.generateCookies();
// paris.render();

// let lima = {
//   name: 'Lima',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookiePurchased: 4.6,
//   cookiesPurchased: [],
//   totalCookies: 0,
//   generateCookies: function(){
//     for (let i = 0; i < hrs.length; i++){
//       let cookieAmt = Math.floor(this.customersPerHr()*this.avgCookiePurchased);
//       this.cookiesPurchased.push (cookieAmt);
//       this.totalCookies += cookieAmt;
//     }
//   },
//   customersPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },
//   render: function(){
//     let myList= document.getElementById('limaSales');
//     let heading=document.getElementById('lima');
//     heading.textContent=this.name;
//     for (let i = 0; i < hrs.length; i++){
//       let liElement = document.createElement('li');
//       liElement.textContent= `${hrs[i]}: ${this.cookiesPurchased[i]} cookies`;
//       myList.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
//     liElement.textContent= `Total: ${this.totalCookies} cookies`;
//     myList.appendChild(liElement);
//   }
// };

// lima.generateCookies();
// lima.render();
