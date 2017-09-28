var apples = 14
console.log(apples);

console.log('i have ' + apples + " apples" );


//--------

var materials = ['wood', 'metal', 'stone']

var words = {
  elephant: 'the worlds largest land mammal',
  school: 'A place of learning.',
  'ice cream': 'A delicious milk-based dessert.',
}

//--------
var num = 16
if (num > 10) {
  console.log(num + " is greater than 10");
}
else if (num === 10) {
  console.log(num + " is exactly 10");
}
else {
  console.log(num + " must be less than 10");
}

//-----------

var base = 5;
for (var i = 0; i < 20; i++) {
  console.log(base + i);
}


//----------------------


var total = 0;
for (var i = 0; i < 100; i++) {
  console.log(total + i);
}


//------------------------

for (var height = 3; height <= 15; height++) {
  if (height > 9) {
    console.log('you can get on the rollercoaster');
  }
  else {
    console.log("you're not allowed on");
  }
}

//------------------

var containers = ['purse', 'wallet', 'backback']
for (var i = 0; i < containers.length; i++) {
  console.log(containers[i]);
}

//---------------------

function hellWorld() {
  console.log('hello world');
};

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber
};

var amount = add(5, 7);

console.log(amount);

//------------
