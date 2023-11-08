
let text_slide = ['Persuasion is often more effectual than force',
    'Hibs and Ross County fans on final',
    'Knowledge is Power'];

let current_text_index = 0;
//Text Sliding with Right Angle Icon
document.getElementById("right").onclick = function () {
    current_text_index += 1;
    if (current_text_index == text_slide.length) {
        current_text_index = 0;
    }
    document.getElementById("text").innerText = text_slide[current_text_index];
};

//Text Sliding with Left Angle Icon
document.getElementById("left").onclick = function () {
    if (current_text_index <= 0) {
        current_text_index = text_slide.length;
    }
    current_text_index -= 1;
    document.getElementById("text").innerText = text_slide[current_text_index];
};
//Automatic Text Slider
setInterval(Timeout, 2200);
function Timeout() {
    current_text_index += 1;
    if (current_text_index == text_slide.length) {
        current_text_index = 0;
    }
    document.getElementById("text").innerText = text_slide[current_text_index];
};

let lower_text_slide = ['Persuasion is often more effectual than force',
'Hibs and Ross County fans on final',
'Knowledge is Power'];
let lower_current_text_index = 0;
//Text Sliding with lower Right Angle Icon
document.getElementById("lower-right").onclick = function () {
lower_current_text_index += 1;
if (lower_current_text_index == lower_text_slide.length) {
    lower_current_text_index = 0;
}
document.getElementById("text2").innerText = lower_text_slide[lower_current_text_index];
console.log("Clicked!");
};

//Text Sliding with Lower Left Angle Icon
document.getElementById("lower-left").onclick = function () {
if (lower_current_text_index <= 0) {
    lower_current_text_index = lower_text_slide.length;
}
lower_current_text_index -= 1;
document.getElementById("text2").innerText = lower_text_slide[lower_current_text_index];
console.log("Clicked!");
};

setInterval(LowerTimeout, 2000);
function LowerTimeout() {
lower_current_text_index += 1;
if (lower_current_text_index == lower_text_slide.length) {
    lower_current_text_index = 0;
}
};

//Automatic Text Typing
var typed = new Typed('#text2', {
    strings: lower_text_slide,
    typeSpeed: 23,
    loop: true,  // Enable looping
    loopCount: Infinity,
});

// const text = ["Hello and Welcome", "Welcome to my Home", "Hello World!"];
// const typingElement = document.getElementById("typing-text");
// let currentLineIndex = 0;
// let currentCharIndex = 0;

// function typeText() {
//   if (currentLineIndex < text.length) {
//     const currentLine = text[currentLineIndex];
    
//     if (currentCharIndex <= currentLine.length) {
//       typingElement.innerHTML = currentLine.substring(0, currentCharIndex);
//       currentCharIndex++;
//     } else {
//       currentLineIndex++;
//       currentCharIndex = 0;
//     }
//   } else {
//     currentLineIndex = 0;
//   }
// }

// setInterval(typeText, 120); // Adjust the speed here (50 milliseconds in this example)

// // Start the typing effect immediately
// typeText();