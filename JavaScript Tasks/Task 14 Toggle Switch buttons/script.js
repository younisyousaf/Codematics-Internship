
// const btnOne = document.getElementById('btnOne');
// const btnTwo = document.getElementById('btnTwo');
// const btnThree = document.getElementById('btnThree');

// const svgOne = document.getElementById("obj1");
// const svgTwo = document.getElementById("obj2");
// const svgThree = document.getElementById("obj3");

// let isBtnOneOn = false;
// let isBtnTwoOn = false;
// let isBtnThreeOn = false;

// btnOne.addEventListener('click', () => {
//     isBtnOneOn = !isBtnOneOn;
//     updateToggleButtonState(btnOne, isBtnOneOn);
//     if (isBtnOneOn == true) {
//         svgOne.style.transform = 'translateX(40px)';
//         svgOne.style.backgroundColor = 'yellow';
//         svgOne.style.borderRadius = '50%';
//     }
//     else {
//         svgOne.style.transform = 'translateX(0px)';
//         svgOne.style.backgroundColor = 'grey';
//         svgOne.style.borderRadius = '50%'
//     }
// });

// btnTwo.addEventListener('click', () => {
//     isBtnTwoOn = !isBtnTwoOn;
//     updateToggleButtonState(btnTwo, isBtnTwoOn);
//     if (isBtnTwoOn == true) {
//         svgTwo.style.transform = 'translateX(40px)';
//         svgTwo.style.backgroundColor = 'yellow';
//         svgTwo.style.borderRadius = '50%';
//     }
//     else {
//         svgTwo.style.transform = 'translateX(0px)';
//         svgTwo.style.backgroundColor = 'grey';
//         svgTwo.style.borderRadius = '50%';
//     }
// });


// btnThree.addEventListener('click', () => {
//     isBtnThreeOn = !isBtnThreeOn;
//     updateToggleButtonState(btnThree, isBtnThreeOn);
//     if (isBtnThreeOn == true) {
//         svgThree.style.transform = 'translateX(40px)';
//         svgThree.style.backgroundColor = 'yellow';
//         svgThree.style.borderRadius = '50%'
//     }
//     else {
//         svgThree.style.transform = 'translateX(0px)';
//         svgThree.style.backgroundColor = 'grey';
//         svgThree.style.borderRadius = '50%';
//     }
// });

// function updateToggleButtonState(button, isOn) {
//     const textElement = button.nextElementSibling;

//     if (isOn) {
//         button.style.backgroundColor = 'skyblue';
//         textElement.textContent = 'ON';
//         svgOne.style.transition =  'transform 0.5s ease, background-color 0.5s ease';
//         svgTwo.style.transition =  'transform 0.5s ease, background-color 0.5s ease';
//         svgThree.style.transition =  'transform 0.5s ease, background-color 0.5s ease';
//     } else {
//         button.style.backgroundColor = 'grey';
//         textElement.textContent = 'OFF';
//     }

// }


// var numbers = [45, 4, 9, 16, 25];
// var over18 = numbers.filter(myFunction);

// // document.getElementById("demo").innerHTML = over18;

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(over18)
// var numbers1 = [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(myFunction);

// // document.getElementById("demo").innerHTML = numbers2;

// function myFunction(value, index, array) {
//   return value * 2;
// }

// console.log(numbers2)

// var numbers = [45, 4, 9, 16, 25];
// var sum = numbers.reduce(myFunction);

// // document.getElementById("demo").innerHTML = "The sum is " + sum;

// function myFunction(total, value, index, array) {
//   return total + value;
// }
// console.log(sum);

// var numbers = [23,4,45,494,34];
// var allValuesOverZero = numbers.every(myfunction);

// function myfunction(value){
//     return value > 68
// }
// console.log(allValuesOverZero)

//When we recieve data from the server we will use JSON.parse() to convert the 
//text string to a object
// var webData = JSON.parse('{"name":"John", "age":30, "city":"New York"}')
// console.log(webData)
// console.log(typeof webData)

// If we want to send the data to server we will first convert the object to a string
//When the object is converted into string completely then we will send the data

// var object = {"name" : "younis khan", "email": "abc283@gmail.com", "location":"anonymous"};
// //Now we will covert it to the string/text form
// var myJSON = JSON.stringify(object);

// console.log(myJSON)
// console.log(typeof myJSON)

// const mydate = new Date();
// console.log("ISO Format : " + mydate.toISOString());
// console.log("JSON Format : ", mydate.toJSON());

//Set and Get Property
// var person = {
//     name: 'younis',
//     location: 'abbottabad',
//     language: 'pashto',
//     get lang() {
//         return this.language
//     },
//     set lang(value) {
//         this.language = value;
//     }
// }
// console.log(person.lang = "English");

//Bind() Method
const personOne = {
    "firstName" : "John",
    "secondName" : "Doe",
    "fullname" : function(){
        return this.firstName + " " + this.secondName;
    }
}

const secondPerson = {
    "firstName" : "Younis",
    "secondName" : "Yousaf",
}

let fullname = personOne.fullname.bind(secondPerson);
console.log("Full Name is : ",fullname());


//Arrow Function