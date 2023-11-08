function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log("Item at Index " + i, ":", arr[i]);
    }
}

var arr = ['Wheat', 'Maze', 'Meat', 'Fruits', 'Vegetables'];
listArrayItems(arr);
console.log('')

// Letter Finder
console.log('-------Letter Finder--------')
function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i);
        }
        else {
            console.log('---No match found at', i);
        }
    }
}
letterFinder('test', 't');

console.log('')

var house2 = {};
house2["rooms"] = 4;
house2['color'] = 'pink';
house2['priceUSD'] = 100000;
console.table(house2);

var arrOfKeys = ['speed', 'altitude', 'color']
var drone = {
    speed: 100,
    altitude: 200,
    color: 'red'
};
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);
}

var decimal = 4.55934;

console.log(Math.trunc(decimal))

var clothes = [];
clothes.push("Jacket");
clothes.push("Trouser");
clothes.push("Wool Clothes");
clothes.push("Cap");
clothes.push("Hineck");
clothes.pop();
console.log(clothes);

var favCar = {};
favCar.color = "Black";
favCar.covertible = true;
console.log(favCar)

// console.log(a+b)

// try {
//     var a = 'Syntax Error

// }
// catch (err) {
//     console.log(err)
// }
// console.log("Program Doesn't Stops!")

//Range Error
// console.log((10).toString(2));
// console.log((10).toString(8))
// console.log((10).toString(10));
// console.log((10).toString(16));
// console.log((10).toString(3));

function addTwoNums(a, b) {
    try {
        if (typeof (a) != 'number') {
            throw new ReferenceError("the first argument is not a number!")
        }
        else if (typeof (b) != 'number') {
            throw new ReferenceError("the second argument is not a number!");
        }
        else {
            console.log(a + b);
        }
    } catch (error) {
        console.log("Error!", error)
    }
}
addTwoNums(5, "5");
console.log("It still works!")

// Defensive Programming
function letterFinder(word, match) {
    var condition1 =
        typeof (word) ==
        'string' &&
        word.length >= 2;
    var condition2 =
        typeof (match) ==
        'string' &&
        match.length == 1;

    if (condition1 == true && condition2 == true) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }
    }
    else {
        console.log("Please pass the correct arguments to the function.");
    }
}
// letterFinder(2,4)
letterFinder("Younis", 'i');

var result = null;
console.log(result)


