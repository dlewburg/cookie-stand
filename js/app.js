'use strict';

let hrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiePurchased: 6.3,
  cookiesPurchased: [],
  totalCookies: 0,
  generateCookies: function(){
    for (let i = 0; i < hrs.length; i++){
      let cookieAmt = Math.floor(this.customersPerHr()*this.avgCookiePurchased);
      this.cookiesPurchased.push (cookieAmt);
      this.totalCookies += cookieAmt;
    }
  },
  customersPerHr: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  render: function(){
    let myList= document.getElementById('seattleSales');
    let heading=document.getElementById('seattle');
    heading.textContent=this.name;
    for (let i = 0; i < hrs.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent= `${hrs[i]}: ${this.cookiesPurchased[i]} cookies`;
      myList.appendChild(liElement);
    }
    let liElement = document.createElement('li');
    liElement.textContent= `Total: ${this.totalCookies} cookies`;
    myList.appendChild(liElement);
  }
};

seattle.generateCookies();
seattle.render();

let tokyo = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiePurchased: 1.2,
  cookiesPurchased: [],
  totalCookies: 0,
  generateCookies: function(){
    for (let i = 0; i < hrs.length; i++){
      let cookieAmt = Math.floor(this.customersPerHr()*this.avgCookiePurchased);
      this.cookiesPurchased.push (cookieAmt);
      this.totalCookies += cookieAmt;
    }
  },
  customersPerHr: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  render: function(){
    let myList= document.getElementById('tokyoSales');
    let heading=document.getElementById('tokyo');
    heading.textContent=this.name;
    for (let i = 0; i < hrs.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent= `${hrs[i]}: ${this.cookiesPurchased[i]} cookies`;
      myList.appendChild(liElement);
    }
    let liElement = document.createElement('li');
    liElement.textContent= `Total: ${this.totalCookies} cookies`;
    myList.appendChild(liElement);
  }
};

tokyo.generateCookies();
tokyo.render();

let dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiePurchased: 3.7,
  cookiesPurchased: [],
  totalCookies: 0,
  generateCookies: function(){
    for (let i = 0; i < hrs.length; i++){
      let cookieAmt = Math.floor(this.customersPerHr()*this.avgCookiePurchased);
      this.cookiesPurchased.push (cookieAmt);
      this.totalCookies += cookieAmt;
    }
  },
  customersPerHr: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  render: function(){
    let myList= document.getElementById('dubaiSales');
    let heading=document.getElementById('dubai');
    heading.textContent=this.name;
    for (let i = 0; i < hrs.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent= `${hrs[i]}: ${this.cookiesPurchased[i]} cookies`;
      myList.appendChild(liElement);
    }
    let liElement = document.createElement('li');
    liElement.textContent= `Total: ${this.totalCookies} cookies`;
    myList.appendChild(liElement);
  }
};

dubai.generateCookies();
dubai.render();

let paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookiePurchased: 2.3,
  cookiesPurchased: [],
  totalCookies: 0,
  generateCookies: function(){
    for (let i = 0; i < hrs.length; i++){
      let cookieAmt = Math.floor(this.customersPerHr()*this.avgCookiePurchased);
      this.cookiesPurchased.push (cookieAmt);
      this.totalCookies += cookieAmt;
    }
  },
  customersPerHr: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  render: function(){
    let myList= document.getElementById('parisSales');
    let heading=document.getElementById('paris');
    heading.textContent=this.name;
    for (let i = 0; i < hrs.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent= `${hrs[i]}: ${this.cookiesPurchased[i]} cookies`;
      myList.appendChild(liElement);
    }
    let liElement = document.createElement('li');
    liElement.textContent= `Total: ${this.totalCookies} cookies`;
    myList.appendChild(liElement);
  }
};

paris.generateCookies();
paris.render();

let lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookiePurchased: 4.6,
  cookiesPurchased: [],
  totalCookies: 0,
  generateCookies: function(){
    for (let i = 0; i < hrs.length; i++){
      let cookieAmt = Math.floor(this.customersPerHr()*this.avgCookiePurchased);
      this.cookiesPurchased.push (cookieAmt);
      this.totalCookies += cookieAmt;
    }
  },
  customersPerHr: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  render: function(){
    let myList= document.getElementById('limaSales');
    let heading=document.getElementById('lima');
    heading.textContent=this.name;
    for (let i = 0; i < hrs.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent= `${hrs[i]}: ${this.cookiesPurchased[i]} cookies`;
      myList.appendChild(liElement);
    }
    let liElement = document.createElement('li');
    liElement.textContent= `Total: ${this.totalCookies} cookies`;
    myList.appendChild(liElement);
  }
};

lima.generateCookies();
lima.render();
