let firstname = 'Michael';
let lastname = 'Orenge';

//console.log(`${firstname} ${lastname}`.toLowerCase());
//console.log(`${firstname} ${lastname}`.split(' '));
console.log(firstname+' '+lastname);

let example=7.77;

//console.log(parseInt(example));
//console.log(parseFloat(example));
console.log(example.toFixed(5));

let example1=parseFloat("33 World 22");
let example2=parseInt('44 Michael 33');
let example3=55.5456.toFixed(2);
let example4=200.0.toFixed(2);

console.log( typeof example1);
console.log(example2);
console.log(typeof example3);
console.log(example4);

let example5 = false;
let example6 = true;
let example7 = null;
let example8 = undefined;
let example9 = '';
let example10 = NaN;
let example11 = 5;
let example12 = 0;

console.log(Boolean(example5));
console.log(Boolean(example6));
console.log(Boolean(example7));
console.log(Boolean(example8));
console.log(Boolean(example9));
console.log(Boolean(example10));
console.log(Boolean(example11));
console.log(Boolean(example12));

let example13 = [5,6,7];

example13.push(8,9,10);

console.log(example13)

let example14 = [5,6,7,8,9,10];

example14.pop();
console.log(example14)

example14.forEach((element) => { console.log(element)});

console.log(example14)

let example15 = ['Michael', 5, true];

//
let example16 = example15.map((element) => { return element});

example16.push(11);

console.log(example15);
console.log(example16);

// Objects

let example17 = {
	firstName: 'Michael',
	lastName: 'Orenge'
	
};

example17.age = 31;


//console.log(example17.firstName);
//console.log(example17.lastName);
console.log(example17.age);

let example18 = {
	firstName: 'Michael'
};

let example19 = example18;

example19.lastName = 'Orenge';

//.log(example18);
console.log(example19);
console.log(example18);

//Arithmetic

let example20 = 15;
let example21 = 20;

//console.log(example21 >= example20)
console.log(example21 != example20)
// !== confirms that example21 is not equal to 20
//== only checks the value
//=== only checks the type whether a string ,number, boolean

//Increments _________________________


let example22 = 4;

//example22 = example22 + 24;
//example22 = example22-20;
example22 +=5;

console.log(example22);

//if, Else if, else and & or

let example23 = 5;

if (example23 === 6){
	console.log('Runs');
} else if (false){
	console.log('else if')
} else{
	console.log('else')
}

// And &&

let example24 = 5;

if (example24 === 6 && true === true){
	console.log('Runs');
} else if (false){
	console.log('else if')
} else{
	console.log('else')
}

// or ||

let example25 = 5;

if (example25 === 6 || true === true){
	console.log('Runs');
} else if (false){
	console.log('else if')
} else{
	console.log('else')
}


//Switch-------

let studentanswer = 'E'

switch(studentanswer){
	case 'A':
	 console.log('A is wrong');
	 break;

	case 'B':
	 console.log('B is wrong');
	 break;

	 case 'C':
	  console.log('C is Correct');
	  break; 

	 default:
	   console.log('Not a real answer') ;
}


// For Loop

//let total = 0;

//for (let i = 0; i < 5; i++){
	//console.log(i);



let total = 0;

for (let i = 0; i < 5; i++){
	total += i;
}

console.log(total);


//While.

