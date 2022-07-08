'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');




const showMovements = function (movements) {
  containerMovements.innerHTML = ''
  movements.forEach(function (move, index) {

    const transcationType = move > 0 ? 'deposit' : 'withdrawal'

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${transcationType}">${index+1} ${transcationType}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${move}</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html)

  });
}


//Creating Username
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(" ").map(function (name) {
      return name[0]
    }).join('');
  });
};


//Display Total Balance in Account
const displayBalance = function (movements) {
  const balance = movements.reduce(function (acc, mov) {

    return acc += mov
  })
  labelBalance.textContent = `${balance}€`
};


//Dsiplay Interest , Withdraws, Deposits
const displaySummary = function (account) {
  const incoming = account.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incoming}€`
  const outgoing = account.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${outgoing}€`
  const interest = (incoming * account.interestRate) / 100
  labelSumInterest.textContent = interest
}



//Login Functionality
createUsername(accounts)
let currentuser;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentuser = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentuser);

  //check pin
  if (currentuser.pin == inputLoginPin.value) {
    //show welcome message
    console.log(inputLoginPin.value);
    labelWelcome.textContent = `Welcome Back ${currentuser.owner}`
    //show ui
    containerApp.style.opacity = "1"
    //show movements
    showMovements(currentuser.movements)

    //show balance
    displayBalance(currentuser.movements)

    //show summary
    displaySummary(currentuser)


  }

})

















































/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = ["5", 450, -400, 3000, -650, -130, 70, 1300];
// // console.log(movements.reverse());
// // /////////////////////////////////////////////////
// // console.log(movements.at(-1)); //at method


// // for (const iterator of movements) {
// //   console.log(iterator);
// // };



// //For each

// // movements.forEach(function(movement,i,arr){
// //   console.log(arr);
// //   })


// const setExample=new Set(['USD','INR','GBR','INR']);

// setExample.forEach(function(value,_,set){
//   console.log(set);

//   console.log(value);
// })



// const juliaData = [3, 5, 2, 12, 7]
// const juliaDataCorrected = juliaData.slice(1, -2)
// const kateData = [4, 1, 15, 8, 3]

// const checkDogs = function (juliaData, kateData) {
//   const dataCombined = [...juliaDataCorrected, ...kateData]
//   dataCombined.forEach(function (data, index) {
//     if (data >= 3)
//       console.log(`dog number ${index+1} is a Adult and is ${data} years old `);
//     else {
//       console.log(`dog number ${index+1} is a Puppy`);
//     }
//   })
// }
// checkDogs(juliaData, kateData)




// const movements= [200, 450, -400, 3000, -650, -130, 70, 1300];

// const result=movements.map(function(mov,idex){
//   return mov+idex;

// })
// console.log(result);
// console.log(movements);

// const arr = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = function (arr) {
//   const humanages = arr.map(function (age) {
//     return age <= 2 ? 2 * age : 16 + (age * 4)
//   })
//   const adults = humanages.filter(function (age) {
//     return age >= 18
//   })
//   console.log(adults);
//   const average = adults.reduce(function (avg, age) {
//     console.log(avg);
//     console.log(age);
//     return avg + age / adults.length
//   }, 0)
//   return average
// }


// const arr = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = function (arr) {
//   const humanages = arr.map(function (age) {
//     return age <= 2 ? 2 * age : 16 + (age * 4)}).filter(function (age) {
//       return age >= 18}).reduce(function (avg, age,i,arr) {
//         return avg + age / arr.length
//       }, 0)
//   return humanages
// }

// console.log(calcAverageHumanAge(arr));